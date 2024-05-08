# from __init__ import app

# if __name__ == '__main__':
# 	app.run(debug=True)
from flask import Flask, request, jsonify, session
from flask_login import current_user
from flask_bcrypt import Bcrypt  # pip install Flask-Bcrypt = https://pypi.org/project/Flask-Bcrypt/
from flask_cors import CORS, cross_origin  # ModuleNotFoundError: No module named 'flask_cors' = pip install Flask-Cors
from models import db, User, JobSeeker, Company, JobStatus, get_uuid, ScheduleInterview
from werkzeug.utils import secure_filename
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
import os
from flask import send_file
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from flask import request, jsonify
import csv
import nltk
import scipy
import difflib
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from sqlalchemy import func

import subprocess
import sqlite3

# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('wordnet')

app = Flask(__name__)

app.config['SECRET_KEY'] = 'jobadvisor-portal-app'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///jobadv.db'

# SQLALCHEMY_TRACK_MODIFICATIONS = False
# SQLALCHEMY_ECHO = True

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
db.init_app(app)

file_path = r"C:\Users\Dell\Downloads\Book1.csv"

# Configure mail settings
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USERNAME'] = 'nikitajk182002@gmail.com'
app.config['MAIL_PASSWORD'] = 'lpoa dfgu avrb hmtd'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'nikitajk182002@gmail.com'

mail = Mail(app)

# with app.app_context():
#     db.create_all()

@app.route("/")
def hello_world():
    return "Hello, World!"


@app.route("/signup", methods=["POST"])
def signup():
    print(request.data)
    name = request.json["name"]
    username = request.json["username"]
    email = request.json["email"]
    role = request.json["role"]
    password = request.json["password"]

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "Email already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(name=name, username=username, email=email, role=role, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    # Check if the user is a jobseeker
    if role == 'jobseeker':
        # Create a new job seeker entry
        user_id = new_user.id
        new_jobseeker = JobSeeker(jobseekername=name, jobseekermail=email, jobseekerid=user_id)
        # new_jobseeker = jobseeker(jobseekerid=rollid, jobseekername=name, jobseekermail=email)
        db.session.add(new_jobseeker)
        db.session.commit()

        # Check if the user is a company
    # if role == 'company':
    #     # Create a new company entry
    #     new_company = Company(companyname=name, companymail=email)
    #      #new_company = Company(companyname=name,post=email,jobdescription=email, companymail=email)
    #     db.session.add(new_company)
    #     db.session.commit()


    session["user_id"] = new_user.id
    return jsonify({
        "id": new_user.id,
        # "user_id": new_user.id,
        "email": new_user.email
    })



#     session["user_id"] = user.id
#
#     return jsonify({
#         "id": user.id,
#         "email": user.email,
#         # "classid": user.classid
#     })

@app.route("/login", methods=["POST"])   #jobseekerlogin
def login():
    email = request.json["email"]
    password = request.json["password"]

    user = User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error": "Unauthorized Access"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401

    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "email": user.email,
        # "classid": user.classid
    })
#display of the jobseeker profile page
@app.route('/user/profile/<string:user_id>', methods=['GET'])
def get_user_profile(user_id):
    id = request.headers.get("id")
    user = User.query.filter_by(id=id).first()
    if user:
        return jsonify({
                'name': user.name,
                'username': user.username,
                'email': user.email
            }), 200
    else:
        return jsonify({"error": "User not found"}), 404

#display of the company profile page
@app.route('/company/profile/<string:user_id>', methods=['GET'])
def get_company_profile(user_id):
    id = request.headers.get("id")
    users = User.query.filter_by(id=id).first()
    if users:
        return jsonify({
                'name': users.name,
                'email': users.email
            }), 200
    else:
        return jsonify({"error": "User not found"}), 404

# Route to fetch jobs posted by a specific company
@app.route('/jobspostedbycompany/<string:companymail>', methods=['GET'])
def fetch_company_jobs(companymail):
    id = request.headers.get("id")
    jobs = Company.query.filter_by(companymail=id).all()
    job_list = []
    for job in jobs:
        job_data = {
            'jobid': job.jobid,
            'job': job.post,
            'description': job.jobdescription,
            'location': job.location,
            'qualification': job.qualification,
            'salary': job.salary
        }

        job_list.append(job_data)
    return jsonify(job_list)

# Add Company Job Postings through a form
@app.route('/companyform/', methods=['POST'])
def add_job():
    data = request.json
    companyname = data.get('company')
    job = data.get('job')
    description = data.get('description')
    qualification = data.get('qualification')
    location = data.get('location')
    salary = data.get('salary')
    # Generate a unique job ID using get_uuid() function
    jobid = get_uuid()
    # Check if company already exists in the database
    existing_company = User.query.filter_by(name=companyname).first()
    companymail = existing_company.email

    new_company = Company(jobid=jobid, companyname=companyname, companymail=companymail, post=job, jobdescription=description, location=location, salary=salary, qualification=qualification)
    db.session.add(new_company)

    db.session.commit()
    return jsonify({'message': 'Job details added successfully'})

UPLOAD_FOLDER = 'D:\\Job_Adv_Final\\Job_Adv_Portal\\server\\uploads'


#display the recommended jobs from the backend
@app.route('/companyjobs/<string:user_id>', methods=['GET'])
def get_company_jobs(user_id):
    # Get user_id from the URL parameter instead of request headers
    id = request.headers.get("id")

    # Query the jobseekers table to get the chatbot response by user_id
    user = JobSeeker.query.filter_by(jobseekerid=user_id).first()

    if user:
        chatbot_response = user.chatbotresponse
        print(f"hello{chatbot_response}")
        # Query the company table to get entries with the same post as chatbot response
        jobs = Company.query.filter(func.lower(Company.post) == func.lower(chatbot_response)).all()
        print(f"heyyy{jobs}")
        job_list = []
        for job in jobs:
            job_data = {
                'jobid': job.jobid,
                'companyname': job.companyname,
                'job': job.post,
                'description': job.jobdescription,
                'qualification': job.qualification,
                'location': job.location,
                'salary': job.salary
            }
            job_list.append(job_data)
        print(job_list)
        return jsonify(job_list)
    else:
        return jsonify({"error": "Currently no vaccancies for this post"})


#After clicking on apply button, update the job status table
@app.route('/applyjobs', methods=['POST'])
def apply_for_job():
    try:
        # Extract jobId and userId from the request data
        data = request.json
        job_id = data.get('jobId')
        user_id = data.get('userId')

        jobstatusid = get_uuid()
        # Create a new JobStatus entry
        existingjobseeker = JobSeeker.query.filter_by(jobseekerid=user_id).first()
        seekeremail = existingjobseeker.jobseekermail

        status = "Applied"
        new_job_status = JobStatus(jobstatusid=jobstatusid, jobsid=job_id, jobseekersid=user_id, jobseekeremail=seekeremail, status=status, resumelink="")

        # Add the new JobStatus entry to the database session
        db.session.add(new_job_status)
        db.session.commit()

        # Return a success response
        return jsonify({'message': 'Job applied successfully'}), 200
    except Exception as e:
        # If an error occurs, return an error response
        return jsonify({'error': str(e)}), 500

#CREATING GOOGLE DRIVE LINK
# Google Drive API credentials
CLIENT_ID = '445086774159-s8ni99npsq4nabe8psd1mm3rkneh8hpj.apps.googleusercontent.com'
CLIENT_SECRET = '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'
REDIRECT_URI = 'https://developers.google.com/oauthplayground'
REFRESH_TOKEN = '1//04tOtUsELGi8SCgYIARAAGAQSNwF-L9Ir79UzwHqQ-kF53MMRVCBiZ0lTEJxHgSJcuJaLE2CEh2dnIbmKp9fseyz-3yWJNIbG5s4'

def create_drive_service():
    credentials = Credentials.from_authorized_user_info({
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET,
        'token_uri': 'https://oauth2.googleapis.com/token',
        'refresh_token': REFRESH_TOKEN
    })
    service = build('drive', 'v3', credentials=credentials)
    return service

def upload_file_to_drive(file_path):
    service = create_drive_service()
    file_name = os.path.basename(file_path)

    file_metadata = {
        'name': file_name,
        'mimeType': 'application/pdf'
    }
    media_body = MediaFileUpload(file_path, mimetype='application/pdf')

    try:
        response = service.files().create(
            body=file_metadata,
            media_body=media_body
        ).execute()
        file_id = response.get('id')  # Retrieve the file ID from the response
        return file_id
    except Exception as e:
        return str(e)


def generate_public_url(file_id):
    service = create_drive_service()
    try:
        # Set permissions directly as arguments, without using requestBody
        response = service.permissions().create(
            fileId=file_id,
            body={'role': 'reader', 'type': 'anyone'}
        ).execute()
        response_share_link = service.files().get(
            fileId=file_id,
            fields='webViewLink'
        ).execute()


        return response_share_link['webViewLink']
    except Exception as e:
        return str(e)

import os

current_directory = os.getcwd()
print("Current working directory:", current_directory)
app.config['UPLOAD_FOLDER'] = current_directory+'\\uploads'

@app.route('/apply/<string:user_id>/<string:job_id>', methods=['POST'])
def apply(user_id,job_id):
    print("Current working directory:", current_directory)
    id = request.headers.get("id")
    print(id)
    email = request.form.get('email')
    print(email)
    name = request.form.get('name')
    print(name)
    resume_file = request.files.get('resume')

    if not email or not name or not resume_file:
        return jsonify({'error': 'Missing data'}), 400

    try:
        filename = secure_filename(resume_file.filename)
        resume_file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        resumelink = os.path.join(current_directory, 'uploads', filename)
        print(resumelink)
        file_path = resumelink
        fileid = upload_file_to_drive(file_path)
        link = generate_public_url(fileid)
        print("PUBLIC URL")
        print(link)
        # Save to database
        jobstatusid = get_uuid()
        # Create a new JobStatus entry
        existingjobseeker = JobSeeker.query.filter_by(jobseekerid=user_id).first()
        seekeremail = existingjobseeker.jobseekermail

        status = "Applied"
        new_job_status = JobStatus(jobstatusid=jobstatusid, jobsid=job_id, jobseekersid=user_id, jobseekeremail=seekeremail, status=status, resumelink=link)

        # Add the new JobStatus entry to the database session
        db.session.add(new_job_status)
        db.session.commit()
        return jsonify({'message': 'Application submitted successfully'}), 200
    except:
        return jsonify({'error': 'Failed to submit application'}), 500

#all the jobids with status applied and jobseekerid=userid are sent to frontend
@app.route('/fetchappliedjobs/<string:user_id>', methods=['GET'])
def fetch_applied_jobs(user_id):
    id = request.headers.get("id")
    print(id)
    try:
        # Get all applied jobs for the user
        # applied_jobs = JobStatus.query.filter_by(jobseekersid=id, status='Applied').all()
        applied_jobs = JobStatus.query.filter(JobStatus.jobseekersid == user_id, JobStatus.status.in_(['Applied', 'Accepted', 'Rejected'])).with_entities(JobStatus.jobsid).all()
        #applied_jobs = JobStatus.query.filter_by(jobseekersid=user_id, status='Applied').with_entities(JobStatus.jobsid).all()
        print(applied_jobs)
        return jsonify([job[0] for job in applied_jobs]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/viewappliedjobs/<string:job_ids>', methods=['GET'])
def view_applied_jobs(job_ids):
    id = request.headers.get("id")

    try:
        # Fetch job details for the given job IDs
        job_ids_list = id.split(',')

        jobs = Company.query.filter(Company.jobid.in_(job_ids_list)).all()

        job_list = []
        for job in jobs:
            job_data = {
                'jobid': job.jobid,
                'companyname': job.companyname,
                'job': job.post,
                'description': job.jobdescription,
                'qualification': job.qualification,
                'location': job.location,
                'salary': job.salary
            }
            job_list.append(job_data)

        return jsonify(job_list), 200
        #return jsonify([job.serialize() for job in jobs]), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
# Fetch jobseeker IDs for the given job ID from the jobstatus table
@app.route('/fetchjobapplicants/<string:job_id>', methods=['GET'])
def fetch_job_applicants(job_id):
    id = request.headers.get("id")
    print(id)
    try:

        job_applicants = JobStatus.query.filter_by(jobsid=id).all()
        jobseeker_ids = [applicant.jobseekersid for applicant in job_applicants]
        print(jobseeker_ids)
        return jsonify(jobseeker_ids), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

 # Fetch jobseeker details for the given jobseeker ID from the JobSeeker table
@app.route('/jobseeker/<string:jobseeker_id>', methods=['GET'])
def get_jobseeker_details(jobseeker_id):
    id = request.headers.get("id")

    try:
        jobseekeridlist = id.split(',')
        jobseeker = JobSeeker.query.filter(JobSeeker.jobseekerid.in_(jobseekeridlist)).all()
        jobseeker_list = []
        for job in jobseeker:
            jobseeker_data = {
                'jobseekerid': job.jobseekerid,
                'jobseekername': job.jobseekername,
                'qualifications': job.qualifications,
                'interests': job.interests,
                'chatbotresponse': job.chatbotresponse,
                'jobseekermail': job.jobseekermail
            }
            jobseeker_list.append(jobseeker_data)


        return jsonify(jobseeker_list), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#to fetch details of the corresponding jobid
@app.route('/company/<string:job_id>', methods=['GET'])
def get_jobs_from_jobid(job_id):
    id = request.headers.get("id")
    print(id)
    jobs = Company.query.filter_by(jobid=id).first()
    job_list = []
    # for job in jobs:
    job_data = {
            'jobid': jobs.jobid,
            'companyname': jobs.companyname,
            'job': jobs.post,
            'description': jobs.jobdescription,
            'location': jobs.location,
            'qualification': jobs.qualification,
            'salary': jobs.salary
        }
    job_list.append(job_data)
    return jsonify(job_list)

#to fetch details of the corresponding applicantid
@app.route('/jobseekers/<string:jobseeker_id>', methods=['GET'])
def get_jobs_from_jobseekerid(jobseeker_id):
    id = request.headers.get("id")
    print(id)
    jobs = JobSeeker.query.filter_by(jobseekerid=id).first()
    job_list = []
    # for job in jobs:
    job_data = {
            'jobseekerid': jobs.jobseekerid,
            'jobseekername': jobs.jobseekername,
            'qualifications': jobs.qualifications,
            'interests': jobs.interests,
            'jobseekermail': jobs.jobseekermail,

        }
    job_list.append(job_data)
    return jsonify(job_list)

@app.route('/scheduleinterview/', methods=['POST'])
def add_interview():
    data = request.json
    jobpostid = data.get('jobId')
    jobapplicantid = data.get('jobSeekerId')
    dateofinterview = data.get('dateOfInterview')
    timeofinterview = data.get('timeOfInterview')
    gmeetlink = data.get('gmeetLink')
    interviewid = get_uuid()

        # Create a new interview entry
    new_interview = ScheduleInterview(interviewid=interviewid, jobpostid=jobpostid, jobapplicantid=jobapplicantid, dateofinterview=dateofinterview, timeofinterview=timeofinterview, gmeetlink=gmeetlink)
    db.session.add(new_interview)

    db.session.commit()
    return jsonify({'message': 'Job details added successfully'})

@app.route('/checkifinterviewscheduled/<job_id>/<applicant_id>', methods=['GET'])
def check_if_interview_scheduled(job_id, applicant_id):
    print(job_id)
    print(applicant_id)
    try:
        interview = ScheduleInterview.query.filter_by(jobpostid=job_id, jobapplicantid=applicant_id).first()
        print(interview)
        print(interview.dateofinterview)
        print(interview.timeofinterview)

        if interview:
            return jsonify({
                'dateofinterview': interview.dateofinterview,
                'timeofinterview': interview.timeofinterview,
                'gmeetlink': interview.gmeetlink
            }), 200
        else:
            return jsonify({}), 200  # No interview scheduled
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#update the status in JobStatus as per Company wish
@app.route('/updatestatus/<job_id>/<jobseeker_id>', methods=['POST'])
def update_status(job_id, jobseeker_id):
    try:
        status = request.json['status']
        job_status = JobStatus.query.filter_by(jobsid=job_id, jobseekersid=jobseeker_id).first()
        if job_status:
            job_status.status = status
            db.session.commit()
            return jsonify({'message': 'Status updated successfully'}), 200
        else:
            return jsonify({'error': 'Job status not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#fetch status of each applicant
@app.route('/fetchapplicantstatus/<job_id>', methods=['GET'])
def fetch_applicant_status(job_id):
    try:
        # Fetch status of each applicant for the given job ID
        applicant_status = {}
        job_status_records = JobStatus.query.filter_by(jobsid=job_id).all()
        for record in job_status_records:
            applicant_status[record.jobseekersid] = record.status
        return jsonify(applicant_status), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500
#fetch resume of each applicant
@app.route('/fetchresumestatus/<job_id>', methods=['GET'])
def fetch_resume_status(job_id):
    try:
        # Fetch status of each applicant for the given job ID
        resume_status = {}
        job_status_records = JobStatus.query.filter_by(jobsid=job_id).all()
        for record in job_status_records:
            resume_status[record.jobseekersid] = record.resumelink
        return jsonify(resume_status), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#send acceptace or rejection mails
@app.route('/sendemail', methods=['POST'])
def send_email():
    data = request.get_json()
    sender = 'noreply@gmail.com'
    recipient = data.get('to')
    subject = data.get('subject')
    body = data.get('body')
    print(recipient)
    print(subject)
    print(body)
    msg = Message(sender=sender, recipients=[recipient], subject=subject, body=body)

    try:
        mail.send(msg)
        return jsonify({'message': 'Email sent successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

#to get the status of each of the applied jobs for the jobSeeker
@app.route('/fetchjobseekerstatus/<job_id>/<user_id>', methods=['GET'])
def fetch_job_status(job_id, user_id):
    job_status = JobStatus.query.filter_by(jobsid=job_id, jobseekersid=user_id).first()
    print(job_id)
    print(user_id)
    print(job_status.status)
    if job_status:
        return jsonify({'status': job_status.status, 'resumelink': job_status.resumelink})
    else:
        return jsonify({'status': 'Not Applied'})

question = None
unique_number = None
@app.route("/send_question", methods=["POST"])
def receive_question():
    # Extract the question from the request body
    global question, unique_number
    #question = request.json.get("question")
    payload = request.json
    question = payload.get("question")
    unique_number = payload.get("uniqueNumber")
    # Process the question as needed (e.g., print it)
    print("Received question:", question)
    print("Received unique number:", unique_number)
    # Optionally, you can perform some operations and send a response back to the frontend
    # For example, you can return a confirmation message
    return jsonify({"message": "Question received successfully"})

import speech_recognition as sr
import moviepy.editor as mp
import nltk
# nltk.download('punkt')
# nltk.download('stopwords')
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import subprocess

@app.route('/start_feedback', methods=['POST'])
def start_feedback():
    global unique_number
    ffmpeg_path = r"D:\\Job-Adv-ITEMS\\ffmpeg-master-latest-win64-lgpl\\bin\\ffmpeg.exe"

    webm_filename = f"C:\\Users\\Dell\\Downloads\\{unique_number}-recorded-video.webm"

    # you need to change the command depending on the gdrive or yt video
    # FFmpeg command to convert audio to WAV
    command = [ffmpeg_path, '-i', webm_filename, f'{unique_number}-recorded-video.mp4']

    # Run FFmpeg command using subprocess
    subprocess.run(command)

    # Convert video to audio
    filename = f"{unique_number}-recorded-video.mp4"
    clip = mp.VideoFileClip(filename)
    clip.audio.write_audiofile(r"converted_mp3.wav")

    # Speech recognition
    r = sr.Recognizer()
    audio = sr.AudioFile(r"converted_mp3.wav")

    with audio as source:
        audio_file = r.record(source)
    result = r.recognize_google(audio_file)

    # Save recognized text to a file
    with open('recognized_text_file.txt', mode='w') as file:
        file.write("speech recognized\n")
        file.write(result)
        print("Speech recognition completed. Now the file is ready.")

    # Extract keywords from recognized text
    with open('recognized_text_file.txt', 'r') as file:
        recognized_text = file.read()

    tokens = word_tokenize(recognized_text)
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [word.lower() for word in tokens if word.isalnum() and word.lower() not in stop_words]
    print(filtered_tokens)
    import google.generativeai as palm

    Generative_Language_API_KEY = "AIzaSyAP-euuedB7wErHT-ixdZlQKevGYVqOt9s"
    palm.configure(api_key=Generative_Language_API_KEY)
    # model_list = [_ for _ in palm.list_models()]
    # for model in model_list:
    #     print(model.name)
    global question
    model_id = 'models/text-bison-001'
    prompt = f"When the question: {question} is asked. The following response is given by the candidate : {result}. I want you to analyse this response for the corresponding question asked. Based on this, I need you to provide a proper and formal constructive feedback as well as other points to improve in the response in not more than 150 words. The feedback should be precise and should be based on how the candidate can improve his/her answer for this question. Ignore the spelling errors and limit the response to 150 words."
    completion = palm.generate_text(
        model=model_id,
        prompt=prompt,
        temperature=0.99,  # randomness of output
        max_output_tokens=250,  # max length of response
        candidate_count=1
    )
    # completion result
    outputs = [output['output'] for output in completion.candidates]
    for output in outputs:
        print(output)
        print('-' * 50)
    feedback = output

    file = filename
    if file:
        cap = VideoCapture(file)
        res = generate_frames(cap)
        #
        # cap = VideoCapture(file)
        # majority_emotion = get_majority_emotion(cap, skip_frames=2)
    return jsonify({'feedback': feedback, 'res': res})
    # Return a response indicating success
    #return jsonify({'message': 'Feedback process started successfully.'})


#to fetch all the companies in the database
@app.route('/admincompanies')
def get_companies_for_admin():
    # Assuming you have a method to query companies from the database
    companies = User.query.filter_by(role='company').all()
    company_data = [{'id': company.id, 'name': company.name, 'email': company.email} for company in companies]
    return jsonify(company_data)

#view company for admin
@app.route('/viewcompanydetails/<string:companymail>', methods=['GET'])
def view_company_details(companymail):
    id = request.headers.get("id")
    jobs = Company.query.filter_by(companymail=id).all()
    job_list = []
    for job in jobs:
        job_data = {
            'jobid': job.jobid,
            'job': job.post,
            'description': job.jobdescription,
            'location': job.location,
            'qualification': job.qualification,
            'salary': job.salary
        }

        job_list.append(job_data)
    return jsonify(job_list)

@app.route('/viewjobseekerforadmin/<string:jobseeker_id>', methods=['GET'])
def view_jobseeker_for_admin(jobseeker_id):
    id = request.headers.get("id")
    print(id)
    jobs = JobSeeker.query.filter_by(jobseekerid=id).first()

    # for job in jobs:
    job_data = {
            'jobseekerid': jobs.jobseekerid,
            'jobseekername': jobs.jobseekername,
            'qualifications': jobs.qualifications,
            'interests': jobs.interests,
            'jobseekermail': jobs.jobseekermail,

        }
    print(job_data)
    return jsonify(job_data)

#handle delete company
@app.route('/handledeletecompany/<string:companyid>',methods=['GET'])
def handle_delete_company(companyid):
    id = request.headers.get("id")
    # Step 1: Obtain companymail from Company table
    company = User.query.filter_by(id=id).first()
    if company:
        companymail = company.email

        # Step 2: Retrieve jobids associated with the companymail
        job_ids = [job.jobid for job in Company.query.filter_by(companymail=companymail).all()]

        # Step 3: Delete entries from ScheduleInterview table
        for job_id in job_ids:
            ScheduleInterview.query.filter_by(jobpostid=job_id).delete()

        # Step 4: Delete entries from JobStatus table
        for job_id in job_ids:
            JobStatus.query.filter_by(jobsid=job_id).delete()

        # Step 5: Delete entries from Company table
        Company.query.filter_by(companymail=companymail).delete()

        # Step 6: Delete entry from User table
        User.query.filter_by(id=id).delete()

        # Commit changes to the database
        db.session.commit()

        return jsonify({'message': 'Company deleted successfully'})
    else:
        return jsonify({'message': 'Company not found'}), 404

#delete jobposts by company module
@app.route('/deletejobposts/<job_id>', methods=['DELETE'])
def delete_job_posts(job_id):
    try:
        # Delete job post from Company table
        company_job_post = Company.query.filter_by(jobid=job_id).first()
        if company_job_post:
            db.session.delete(company_job_post)

        # Delete job status entries from JobStatus table
        job_status_entries = JobStatus.query.filter_by(jobsid=job_id).all()
        for entry in job_status_entries:
            db.session.delete(entry)

        # Delete schedule interview entries from ScheduleInterview table
        schedule_interview_entries = ScheduleInterview.query.filter_by(jobpostid=job_id).all()
        for entry in schedule_interview_entries:
            db.session.delete(entry)

        db.session.commit()
        return jsonify({'message': 'Job posts and related entries deleted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/adminjobseekers')
def get_job_seekers_for_admin():
    # Assuming you have a method to query job seekers from the database
    job_seekers = User.query.filter_by(role='jobseeker').all()
    job_seeker_data = [{'id': job_seeker.id, 'name': job_seeker.name, 'email': job_seeker.email} for job_seeker in job_seekers]
    return jsonify(job_seeker_data)
@app.route('/logout', methods=["POST"])
# def logout(user_id):
def logout():
    # if "user_id" not in session or session["user_id"] != user_id:
    #     return jsonify({"error": "Unauthorized Access"}), 401

    session.clear()
    return jsonify({"message": "Logged out successfully"})

# Load job data from CSV file
def load_jobs_data(file_path):
    jobs_data = []
    with open(file_path, newline='', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            jobs_data.append(row)
    return jobs_data

# Preprocess text: tokenize, remove stopwords, and lemmatize
def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    filtered_tokens = [word for word in tokens if word.isalnum() and word not in stop_words]
    lemmatizer = WordNetLemmatizer()
    lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]
    return ' '.join(lemmatized_tokens)

# Check if a qualification is equivalent or higher than another
def is_higher_qualification(user_qualification, job_qualification):
    if user_qualification == "12th" and job_qualification == "10th":
        return True
    return False

# Get job suggestions based on user qualifications and skills
def get_job_suggestions(user_qualifications, user_skills, jobs_data):
    preprocessed_user_qualifications = preprocess_text(user_qualifications)
    preprocessed_user_skills = preprocess_text(user_skills)

    # Filter jobs based on qualifications and skills
    matching_jobs = []
    for job in jobs_data:
        if is_higher_qualification(user_qualifications, job['qualification']):
            matching_jobs.append(job)
        elif user_qualifications == job['qualification']:
            matching_jobs.append(job)

    # No matching jobs found
    if not matching_jobs:
        return None

    # Filter jobs based on skills
    filtered_jobs = []
    for job in matching_jobs:
        job_skills = preprocess_text(job['skills'])
        if any(difflib.get_close_matches(skill, job_skills.split(), n=1, cutoff=0.8) for skill in preprocessed_user_skills.split()):
            filtered_jobs.append(job)

    # No matching jobs found
    if not filtered_jobs:
        return None

    # Calculate TF-IDF for qualifications
    job_qualifications = [job['qualification'] for job in filtered_jobs]
    tfidf_vectorizer_qualifications = TfidfVectorizer()
    tfidf_matrix_qualifications = tfidf_vectorizer_qualifications.fit_transform(job_qualifications + [preprocessed_user_qualifications])

    # Calculate TF-IDF for skills
    job_skills = [job['skills'] for job in filtered_jobs]
    tfidf_vectorizer_skills = TfidfVectorizer()
    tfidf_matrix_skills = tfidf_vectorizer_skills.fit_transform(job_skills + [preprocessed_user_skills])

    # Combine TF-IDF matrices
    tfidf_matrix = scipy.sparse.hstack([tfidf_matrix_qualifications, tfidf_matrix_skills])

    # Calculate cosine similarity only if both qualifications and skills match
    user_tfidf = tfidf_matrix[-1]
    job_tfidf = tfidf_matrix[:-1]

    similarities = cosine_similarity(user_tfidf, job_tfidf)
    sorted_indices = similarities.argsort(axis=1)[:, ::-1]

    # Find the job with the highest similarity score for both qualifications and skills
    highest_score_job = None
    highest_score = -1
    for idx in sorted_indices[0]:
        if similarities[0, idx] > highest_score:
            highest_score = similarities[0, idx]
            highest_score_job = filtered_jobs[idx]

    return highest_score_job
import json
# Main function
# @app.route('/chatbot/<string:user_id>', methods=['POST'])
# def chatbot(user_id):
#     # Get user_id from the URL parameter instead of request headers
#     # id = request.headers.get("id")
#     data = request.json
#     user_qualifications = data.get('qualification')
#     user_skills = data.get('skills')
#     jobs_data = load_jobs_data(file_path)  # Assuming load_jobs_data is defined elsewhere
#     suggested_jobs = get_job_suggestions(user_qualifications, user_skills, jobs_data)
#     user = JobSeeker.query.filter_by(jobseekerid=user_id).first()  # Use user_id from URL parameter
#     if user:
#         #new_job = JobSeeker(qualifications=user_qualifications, interests=user_skills, chatbotresponse=suggested_jobs)
#         suggested_jobs_str = json.dumps(suggested_jobs)
#         new_job=JobSeeker(
#             qualifications=user_qualifications,
#             interests=user_skills,
#             chatbotresponse=suggested_jobs_str)
#         db.session.add(new_job)
#         db.session.commit()
#         return jsonify(suggested_jobs)
#     else:
#         return jsonify({"error": "User doesn't exist"})
@app.route('/chatbot/<string:user_id>', methods=['POST'])
def chatbot(user_id):
    # Get user_id from the URL parameter instead of request headers
    id = request.headers.get("user_id")
    print(f"new {user_id}")
    print(f"hello {id}")
    data = request.json
    print(data)
    user_qualifications = data.get('qualification')
    user_skills = data.get('skills')
    jobs_data = load_jobs_data(file_path)  # Assuming load_jobs_data is defined elsewhere
    suggested_jobs = get_job_suggestions(user_qualifications, user_skills, jobs_data)
    print(f"suggested {suggested_jobs}")
    user = JobSeeker.query.filter_by(jobseekerid=user_id).first()  # Use user_id from URL parameter
    print(f"user{user}")
    if user:
        # Update the existing record with new data
        user.qualifications = user_qualifications
        user.interests = user_skills
        user.chatbotresponse=suggested_jobs.get('jobs')
        db.session.commit()
        return jsonify(suggested_jobs)
    else:
        return jsonify({"error": "User doesn't exist"})

# # def plt_show(cap):
# #     plot_stress=plt.plot(range(len(points)),points,'ro')
# #     plt.title("Stress Levels")
# #     plt.show()
# #     return plot_stress
# #
# # plott = plt_show(cap)
# import cv2
# import numpy as np
# import dlib
# from keras.models import load_model
# from tensorflow.keras.preprocessing.image import img_to_array
# from scipy.spatial import distance as dist
# import imutils
# from imutils import face_utils
# import matplotlib.pyplot as plt
# from collections import Counter
#
# detector = dlib.get_frontal_face_detector()
# # predictor = dlib.shape_predictor("shape_predictor_68_face_landmarks.dat")
# emotion_classifier = load_model("_mini_XCEPTION.102-0.66.hdf5", compile=False)
#
# def emotion_finder(faces, frame):
#     EMOTIONS = ["angry", "disgust", "scared", "happy", "sad", "surprised", "neutral"]
#     x, y, w, h = face_utils.rect_to_bb(faces)
#     frame = frame[y:y+h, x:x+w]
#     roi = cv2.resize(frame, (64, 64))
#     roi = roi.astype("float") / 255.0
#     roi = img_to_array(roi)
#     roi = np.expand_dims(roi, axis=0)
#     preds = emotion_classifier.predict(roi)[0]
#     label = EMOTIONS[preds.argmax()]
#     if label in ['scared', 'sad', 'angry', 'disgust']:
#         label = 'Low Confidence'
#     elif label in ['happy', 'surprised', 'neutral']:
#         label = 'High Confidence'
#     return label
#
# class VideoCapture:
#     def __init__(self, video_file):
#         self.video = cv2.VideoCapture(video_file)
#
#     def __del__(self):
#         self.video.release()
#
#
# def get_majority_emotion(cap, skip_frames=1):
#     emotions = []
#     frame_count = 0
#
#     while True:
#         ret, frame = cap.video.read()
#         if not ret:
#             break
#
#         frame_count += 1
#         if frame_count % skip_frames != 0:
#             continue  # Skip processing this frame
#
#         frame = cv2.flip(frame, 1)
#         frame = imutils.resize(frame, width=500, height=500)
#         gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
#         detections = detector(gray, 0)
#
#         for detection in detections:
#             emotion = emotion_finder(detection, gray)
#             print(emotion)
#             emotions.append(emotion)
#
#     majority_emotion = Counter(emotions).most_common(1)[0][0]
#     if majority_emotion == "High Confidence":
#         msg = "Major Predicted Level of Confidence: High. \nComment: You are good to go. You look confident and enthusiastic about your answers."
#     elif majority_emotion == "Low Confidence":
#         msg = "Major Predicted Level of Confidence: Low. \nComment: Please be more confident and try keeping a pleasant face more often during the Interview next time."
#     # else:
#     #     msg = "Major Predicted Level of Confidence: Neutral. \nComment: Try keeping a pleasant face during the Interview."
#     print(msg)
#     return msg

from flask import Flask, request, Response
from tensorflow import keras
import tensorflow as tf
import numpy as np
import cv2


# Loading the model
model = keras.models.load_model('./confidentlatest_model.h5')
model.compile()

class VideoCapture:
    def __init__(self, video_file):
        self.video = cv2.VideoCapture(video_file)

    def __del__(self):
        self.video.release()

def process_frame(frame):
    gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    gray_frame = np.expand_dims(gray_frame, axis=-1)
    resize_frame = tf.image.resize(gray_frame, (128, 128))
    yhat = model.predict(np.expand_dims(resize_frame / 255, 0))
    # confidence = yhat[0]
    confidence = 1 - yhat
    print(confidence)
    if confidence >= 0.55:
        msg = 'Predicted Level of Confidence: High'
    elif confidence < 0.55:
        msg = 'Predicted Level of Confidence: Low'
    # else:
    #     msg = 'Predicted Level of Confidence: Neutral'
    print(msg)
    return confidence

def generate_frames(cap):
    confidence_predictions = []
    # confident_count = 0
    # unconfident_count = 0
    while True:
        ret, frame = cap.video.read()
        if not ret:
            break
        confidence = process_frame(frame)
        confidence_predictions.append(confidence)
        # cv2.imshow(frame, 0)
    # Calculate the majority prediction after processing all frames
    # for confidence in confidence_predictions:
    #     if confidence > 0.55:
    #         confident_count += 1
    #     elif confidence < 0.30:
    #         unconfident_count += 1
    #
    # total_frames = len(confidence_predictions)
    # print(total_frames)
    # confident_proportion = confident_count / total_frames
    # unconfident_proportion = unconfident_count / total_frames
    confidence_array = np.array(confidence_predictions)

    majority_prediction = np.mean(confidence_array)
    # if confident_proportion>unconfident_proportion:
    #     message = "Confident"
    # else:
    #     message = "Unconfident"
    if majority_prediction >= 0.55:
        message = 'Majority Predicted Level of Confidence: High. \n\nComment: You are good to go. You look confident and enthusiastic about your answers.'
    elif majority_prediction < 0.55:
        message = 'Majority Predicted Level of Confidence: Low. \n\nComment: Please be more confident and try keeping a pleasant face more often during the Interview next time.'
    # else:
    #     message = 'Majority Predicted Level of Confidence: Neutral. \n\nComment: Try keeping a pleasant face during the Interview.'
    print(message)
    return message


# @app.route('/video', methods=['POST'])
# def video():
# file = './WIN_20240504_16_15_38_Pro.mp4'
#
# if file:
#     cap = VideoCapture(file)
#     generate_frames(cap)

if __name__ == "__main__":
    app.run(debug=True)