import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ScheduleInterview.css'

const ScheduleInterview = () => {

 const { applicantId, jobId } = useParams();
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);

    const [formData, setFormData] = useState({
        dateOfInterview: '',
        timeOfInterview: '',
        gmeetLink: '',
        jobId: jobId,
        jobSeekerId: applicantId
    });

const navigate = useNavigate();
    useEffect(() => {
        fetchJobs();
        fetchApplicants();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/company/${jobId}`, { headers: { id: jobId } });
            console.log(response)
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    const fetchApplicants = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5000/jobseekers/${applicantId}`, { headers: { id: applicantId } });
            console.log(response)
            setApplicants(response.data);
        } catch (error) {
            console.error('Error fetching applicants:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         console.log(formData)
            await axios.post('http://localhost:5000/scheduleinterview/', formData);
            // Send automated email to the candidate
            console.log(applicants[0]?.jobseekername)
            const emailBody = `Dear ${applicants[0]?.jobseekername},\n\nI hope this message finds you well. We are excited to move forward with your application for the position of ${jobs[0]?.job} at ${jobs[0]?.location}, offered by ${jobs[0]?.companyname}.\nGiven the current situation, interviews will be conducted online to prioritize your safety and convenience.\n\nHere are the details for your online interview:\n\n\n\nDate of Interview: ${formData.dateOfInterview}\nTime of Interview: ${formData.timeOfInterview}\nPlatform: Google Meet\nGoogle Meet Link: ${formData.gmeetLink}\nReference ID: ${applicants[0]?.jobseekerid}\n\nPlease confirm your availability for this interview by replying to this email. If the provided date and time pose any conflicts, kindly let us know, and we will do our best to accommodate you.\nIf you have any questions or require assistance with the online platform, please do not hesitate to reach out.\nWe are looking forward to our conversation and learning more about your experiences and how they align with our team.\n\nBest regards,\nJob_Adv_Portal`;
            await axios.post(`http://127.0.0.1:5000/sendemail`, { to: applicants[0]?.jobseekermail, subject: 'Interview Schedule', body: emailBody });

            alert("Interview Scheduled Successfully !")
            navigate(`/viewapplicants/${jobId}`)
            // Handle success
        } catch (error) {
            console.error('Error scheduling interview:', error);
        }
    };

    return (
        <div className='schedule-interview-container'>
            <h1 className='schedule-interview-text'>Schedule Interview</h1>
            <form className="schedule-interview-form" onSubmit={handleSubmit}>
                <div>
                    <label>Date of Interview:</label>
                    <input style={{color:"black"}} type="date" name="dateOfInterview" value={formData.dateOfInterview} onChange={handleChange} required />
                </div>
                <div>
                    <label>Time of Interview:</label>
                    <input style={{color:"black"}} type="time" name="timeOfInterview" value={formData.timeOfInterview} onChange={handleChange} required />
                </div>
                <div>
                    <label>Google Meet Link:</label>
                    <input style={{color:"black"}} type="text" name="gmeetLink" value={formData.gmeetLink} onChange={handleChange} required />
                </div>
                <div>
                    <label>Job:</label>
                    <input style={{color:"black"}} type="text" name="jobId" value={jobId} />
                </div>
                <div>
                    <label>Applicant:</label>
                    <input style={{color:"black"}}
                type="text"
                name="applicantId"
                value={applicantId}

            />
                </div>
                <br/>
                <br/>

                <button className='login-button' style={{background:"#124076"}} type="submit">Schedule Interview</button>
            </form>
            <div className='schedule-interview-inner-container'>
                <div className="schedule-job-card-container">
                    {jobs.map(job => (
                    <div className="schedule-job-card" key={job.jobId}>
                        <h3>{job.job}</h3>
                            <p>Company : {job.companyname}</p>
                            <p>JobID : {job.jobid}</p>
                            <p>Description: {job.description}</p>
                            <p>Qualification: {job.qualification}</p>
                            <p>Location: {job.location}</p>
                            <p>Salary: {job.salary}</p>

                        </div>
                    ))}
                </div>
                    <div className="schedule-interview-applicant-container">
                            {applicants.map(applicant => (
                                <div className="applicant-card" key={applicant.jobseekerid}>
                                    <h2>{applicant.jobseekername}</h2>
                                    <p>Email: {applicant.jobseekermail}</p>
                                    <p>Qualifications: {applicant.qualifications}</p>
                                    <p>Interests: {applicant.interests}</p>
                                    <p>JobSeeker ID: {applicant.jobseekerid}</p>

                                </div>
                            ))}
                        </div>
            </div>
        </div>
    );
};

export default ScheduleInterview;
