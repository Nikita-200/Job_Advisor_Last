import './CompanyHome.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TrashIcon from '../../assets/images/delete-button-svgrepo-com.svg';

const CompanyHome = () => {
    const [companyData, setCompanyData] = useState({});
    const [jobs, setJobs] = useState([]);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        fetchCompanyData();
    }, []);

    const fetchCompanyData = async () => {
        const user_id = sessionStorage.getItem("user_id");
        console.log(user_id); //company id

        try {
            const response = await fetch(`http://127.0.0.1:5000/company/profile/${user_id}`, { headers: { id: user_id } });
            const data = await response.json();
            setCompanyData(data);
            console.log(data.email)
            // Fetch jobs posted by this company
            const jobsResponse = await axios.get(`http://127.0.0.1:5000/jobspostedbycompany/${data.email}`, { headers: { id: data.email } });
            setJobs(jobsResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://127.0.0.1:5000/logout", { withCredentials: true });
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };
      const handleViewApplicants = async (jobId) => {
        const user_id = sessionStorage.getItem("user_id");

        console.log(jobId)
            try {
        navigate(`/viewapplicants/${jobId}`);
        } catch (error) {
            console.error('Error applying for job:', error);
        }
    };

    const handleDeleteJob = async (jobId) => {
        try {

            await axios.delete(`http://127.0.0.1:5000/deletejobposts/${jobId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting job:', error);
        }
    };

    return (
        <div className='company-home '>
            
            <h1 className='company-text'>Company Profile</h1>
            <div className='company-container'>
            <p>Name: {companyData.name}</p>
            <p style={{marginBottom:"20px"}}>Email: {companyData.email}</p>
            <Link to="/companyform" className='company-add-job-btn'>Add Job Vacancy</Link>
            </div>
            

            <h2 className='company-text'>Jobs Posted by {companyData.name}</h2>
             <div className="job-card-container">
            {jobs.map(job => (
            // <div className="job-card" key={job.jobid}>
            //     <h3>{job.job}</h3>
            //         <p>JobID : {job.jobid}</p>
            //         <p>Description: {job.description}</p>
            //         <p>Location: {job.location}</p>
            //         <p>Salary: {job.salary}</p>
            //         <button onClick={() => handleViewApplicants(job.jobid)}>View Applicants</button>
            //     </div>
                 <div className="job-card" key={job.jobid}>
                 <button className="delete-job-btn" onClick={() => handleDeleteJob(job.jobid)}>
                            <img src={TrashIcon} alt="trash icon" style={{ width: '30px', height: '30px', marginLeft: '400px' }} />
                        </button>
                 <div className="job-card-title">{job.job}</div>
                 <div className="job-card-subtitle">
                 {job.description}
                 </div>
                 <div className="job-detail-buttons">
                   <h2 style={{marginBottom:"10px", fontSize:"20px"}} className="search-buttons detail-button">JobID : {job.jobid}</h2>
                   <h2 style={{marginBottom:"10px", fontSize:"20px"}} className="search-buttons detail-button">Qualification : {job.qualification}</h2>
                   <button style={{marginBottom:"10px"}} className="login-button search-buttons detail-button">Location: {job.location}</button>
                   <br/>
                   <button className="login-button search-buttons detail-button">Salary: {job.salary}</button>
                 </div>
                 <div className="job-card-buttons">
                   <button style={{padding:"10px 20px", borderRadius:"20"}} onClick={() => handleViewApplicants(job.jobid)} className="search-buttons login-button card-buttons">View Applicants</button>
                   {/* <button className="search-buttons card-buttons-msg">Messages</button> */}
                 </div>
               </div>
            ))}
        </div>
        <button className='login-button' style={{background:"#1679AB", marginLeft:"700px",marginTop:"20px", marginBottom:"30px",padding:"10px 20px",}} onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default CompanyHome;
