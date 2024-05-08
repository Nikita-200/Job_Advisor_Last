import './ViewCompanyForAdmin.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ViewCompanyForAdmin = () => {
    const [companyData, setCompanyData] = useState({});
    const [jobs, setJobs] = useState([]);
    const [userId, setUserId] = useState('');
    const { companyId } = useParams();

    useEffect(() => {
        fetchCompanyData();
    }, []);

    const fetchCompanyData = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:5000/company/profile/${companyId}`, { headers: { id: companyId } });
            const data = await response.json();
            setCompanyData(data);
            console.log(data.email)
            // Fetch jobs posted by this company
            const jobsResponse = await axios.get(`http://127.0.0.1:5000/viewcompanydetails/${data.email}`, { headers: { id: data.email } });
            setJobs(jobsResponse.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const navigate = useNavigate();

    return (
        <div className='company-home '>

            <h1 className='company-text'>Company Profile</h1>
            <div className='company-container'>
            <p>Name: {companyData.name}</p>
            <p style={{marginBottom:"20px"}}>Email: {companyData.email}</p>

            </div>


            <h2 className='company-text'>Jobs Posted by {companyData.name}</h2>
             <div className="job-card-container">
            {jobs.map(job => (

                 <div className="job-card" key={job.jobid}>

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
               </div>
            ))}
        </div>
         </div>
    );
};

export default ViewCompanyForAdmin;
