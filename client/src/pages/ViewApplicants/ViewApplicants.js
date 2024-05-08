import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './ViewApplicants.css'

const ViewApplicant = () => {
    const [applicants, setApplicants] = useState([]);
    const [interviewDetailsMap, setInterviewDetailsMap] = useState({});
    const { jobId } = useParams();
     const [emailSent, setEmailSent] = useState(false);


    useEffect(() => {
            fetchApplicants();
    }, []);



    const fetchApplicants = async () => {
        try {
            // Fetch jobseeker IDs for the given job ID from the jobstatus table
            const response = await axios.get(`http://127.0.0.1:5000/fetchjobapplicants/${jobId}`, { headers: { id: jobId } });
            const jobSeekerIds = response.data;
            console.log(jobSeekerIds)
               // Fetch jobseeker details for each jobseeker ID
            const applicantsData = await axios.get(`http://127.0.0.1:5000/jobseeker/${jobSeekerIds}`, { headers: { id: jobSeekerIds } });
            console.log(applicantsData.data)
            setApplicants(applicantsData.data);

              // Fetch initial status of each applicant from the backend
            const statusResponse = await axios.get(`http://127.0.0.1:5000/fetchapplicantstatus/${jobId}`);
            const applicantStatus = statusResponse.data;
            console.log(applicantStatus)
            const resumeResponse = await axios.get(`http://127.0.0.1:5000/fetchresumestatus/${jobId}`);
            const resumeStatus = resumeResponse.data;
            console.log(resumeStatus)
            // Set status for each applicant
            setApplicants(prevApplicants =>
                prevApplicants.map(applicant => ({
                    ...applicant,
                    status: applicantStatus[applicant.jobseekerid] || '', // Set status or empty string if not found
                    resumelink: resumeStatus[applicant.jobseekerid] || ''
                }))
            );

            // Fetch jobseeker details for each jobseeker ID
        for (const applicantId of jobSeekerIds) {
            const interviewResponse = await axios.get(`http://127.0.0.1:5000/checkifinterviewscheduled/${jobId}/${applicantId}`);
            const interviewData = interviewResponse.data;

            // Update interviewDetailsMap with interview details for each applicant
            setInterviewDetailsMap(prevDetails => ({
                ...prevDetails,
                [applicantId]: interviewData
            }));
        }



        } catch (error) {
            console.error('Error fetching applicants:', error);
        }
    };
    const navigate = useNavigate();
    const handleScheduleInterview = (applicantId) => {


        // Handle scheduling interview for the selected applicant
        console.log('Scheduling interview for applicant with ID:', applicantId);
        navigate(`/scheduleinterview/${applicantId}/${jobId}`)
    };

     const handleAccept = async (jobseekerId, jobseekerMail, jobseekerName) => {
        try {
            await axios.post(`http://127.0.0.1:5000/updatestatus/${jobId}/${jobseekerId}`, { status: 'Accepted' });
            // Fetch job details
        const jobDetailsResponse = await axios.get(`http://127.0.0.1:5000/company/${jobId}`, { headers: { id: jobId } });
        const jobDetails = jobDetailsResponse.data;

             // Send email to job seeker
            if (!emailSent) {
                await axios.post(`http://127.0.0.1:5000/sendemail`, { to: jobseekerMail, subject: 'Application Accepted', body:`Dear ${jobseekerName},\n\nWe are delighted to inform you that your application for the position of ${jobDetails[0]?.job} at ${jobDetails[0]?.companyname} located in ${jobDetails[0]?.location} has been accepted. Welcome aboard!\n\nBest regards,\nJob_Adv_Portal`});
                setEmailSent(true); // Set email sent state to true
            }
            // Update UI to show accepted status
            setApplicants(prevApplicants => prevApplicants.map(applicant => {
                if (applicant.jobseekerid === jobseekerId) {
                    // Update status and accepted state
                    return { ...applicant, status: 'Accepted' };
                }
                return applicant;
            }));

        } catch (error) {
            console.error('Error accepting applicant:', error);
        }
    };
    const truncateLink = (link, maxLength = 40) => {
    if (link.length > maxLength) {
        return link.substring(0, maxLength) + '...';
    }
    return link;
};
    const handleReject = async (jobseekerId, jobseekerMail, jobseekerName) => {
        try {
            await axios.post(`http://127.0.0.1:5000/updatestatus/${jobId}/${jobseekerId}`, { status: 'Rejected' });
             // Fetch job details
        const jobDetailsResponse = await axios.get(`http://127.0.0.1:5000/company/${jobId}`, { headers: { id: jobId } });
        const jobDetails = jobDetailsResponse.data;
            // Send email to job seeker
            if (!emailSent) {
                await axios.post(`http://127.0.0.1:5000/sendemail`, { to: jobseekerMail, subject: 'Application Update', body: `Dear ${jobseekerName},\n\nWe regret to inform you that your application for the position of ${jobDetails[0]?.job} at ${jobDetails[0]?.companyname} located in ${jobDetails[0]?.location} has been rejected. We appreciate your interest and wish you success in your future endeavors.\n\nBest regards,\nJob_Adv_Portal` });
                setEmailSent(true); // Set email sent state to true
            }
            // Update UI to show rejected status
            setApplicants(prevApplicants => prevApplicants.map(applicant => {
                if (applicant.jobseekerid === jobseekerId) {
                    return { ...applicant, status: 'Rejected' };
                }
                return applicant;
            }));

        } catch (error) {
            console.error('Error rejecting applicant:', error);
        }
    };

    return (
        <div className='view-applicants'>
            <h1 style={{fontSize:"30px"}} className='view-applicants-text'>View Applicants</h1>
            <div className="applicant-container">
                {applicants.map(applicant => (

    <div className="view-applicants-container">
            <div className="view-applicant">
                <div className="view-applicant-preview">
                    <h6 >Applicant</h6>
                    <h2>{applicant.jobseekername}</h2>
                    {/* <a href="#">View all chapters <FontAwesomeIcon icon={faChevronRight} /></a> */}
                </div>
                <div className="view-applicant-info">
                    
                    <h3>Email: {applicant.jobseekermail}</h3>
                     {applicant.resumelink && (
        <h3>Resume: <a href={applicant.resumelink} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>{truncateLink(applicant.resumelink)}</a></h3>
    )}
                      <h3>Qualifications: {applicant.qualifications}</h3>
                    <h3>Interests: {applicant.interests}</h3>
                    <h3>JobSeeker ID: {applicant.jobseekerid}</h3>
                                        {interviewDetailsMap[applicant.jobseekerid] && interviewDetailsMap[applicant.jobseekerid].dateofinterview ? (
                                                <p>Interview scheduled on <b>{interviewDetailsMap[applicant.jobseekerid].dateofinterview}</b> at <b>{interviewDetailsMap[applicant.jobseekerid].timeofinterview}</b> with the gmeet link: <b><a style={{textDecoration:"none", color:"#000"}} href={"https://" + interviewDetailsMap[applicant.jobseekerid].gmeetlink}>{interviewDetailsMap[applicant.jobseekerid].gmeetlink}</a></b></p>
                                            ) : (
                                                <button className='login-button' style={{  marginTop:"10px",marginLeft:"80px"}} onClick={() => handleScheduleInterview(applicant.jobseekerid)}>Schedule Interview</button>
                                            )}
                                            {applicant.status === 'Accepted' ? (
                            <button className='login-button' style={{ backgroundColor: 'green', marginTop:"10px",marginLeft:"130px"}}>Accepted</button>
                        ) : applicant.status === 'Rejected' ? (
                            <button className='login-button' style={{ backgroundColor: 'red' , marginTop:"10px",marginLeft:"130px" }}>Rejected</button>
                        ) : (
                            <>

                                <button className='login-button' style={{ padding:"20px", marginTop:"10px",marginLeft:"130px"}} onClick={() => handleAccept(applicant.jobseekerid, applicant.jobseekermail, applicant.jobseekername)}>Accept</button>
                                <button className='login-button' style={{  padding:"20px",marginTop:"10px",marginLeft:"130px"}} onClick={() => handleReject(applicant.jobseekerid, applicant.jobseekermail, applicant.jobseekername)}>Reject</button>
                            </>
                        )}
                    {/* <button className="btn">Continue</button> */}
                </div>
            </div>
        </div>
                ))}
            </div>
        </div>
    );
};

export default ViewApplicant;

