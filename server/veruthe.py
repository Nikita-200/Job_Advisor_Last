from flask import Flask, request, jsonify
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

import os

app = Flask(__name__)


# Google Drive API credentials
CLIENT_ID = '445086774159-s8ni99npsq4nabe8psd1mm3rkneh8hpj.apps.googleusercontent.com'
CLIENT_SECRET = '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'
REDIRECT_URI = 'https://developers.google.com/oauthplayground'
REFRESH_TOKEN = '1//047J6onk_IAIvCgYIARAAGAQSNwF-L9IrBakqCVaf37bULf7ubNuQ6KA9ZAU8heomZObREeC-rlAWFT4Rc_e2esSXnu7bXsQj9F8'

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
        'mimeType': 'image/jpg'
    }
    media_body = MediaFileUpload(file_path, mimetype='image/jpg')

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

        print(response_share_link)
        return response_share_link['webViewLink']
    except Exception as e:
        return str(e)

file_path="D:\\Job_Adv_Final\\Job_Adv_Portal\\server\\uploads\\3.jpg"
fileid=upload_file_to_drive(file_path)
link=generate_public_url(fileid)
print(link)
#
# @app.route('/upload', methods=['POST'])
# def upload_file():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'})
#
#     file = request.files['file']
#     if file.filename == '':
#         return jsonify({'error': 'No selected file'})
#
#     file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
#     response = upload_file_to_drive(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
#     return jsonify(response)
#
# @app.route('/generate-url/<file_id>', methods=['GET'])
# def generate_url(file_id):
#     response = generate_public_url(file_id)
#     return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
