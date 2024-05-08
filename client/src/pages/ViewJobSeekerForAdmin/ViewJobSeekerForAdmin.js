import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './ViewJobSeekerForAdmin.css';
import { useParams } from 'react-router-dom';

const ViewJobSeekerForAdmin = () => {
    const [userData, setUserData] = useState({});
    const [jobs, setJobs] = useState([]);

    const { jobSeekerId } = useParams();

    useEffect(() => {
        fetchUserData();
        fetchAppliedJobsData();
    }, []);

    const fetchUserData = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:5000/viewjobseekerforadmin/${jobSeekerId}`, { headers: { id: jobSeekerId } });
            const data = await response.json();
            console.log(data)
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchAppliedJobsData = async () => {

        try {
            const response = await fetch(`http://127.0.0.1:5000/fetchappliedjobs/${jobSeekerId}`, { headers: { id: jobSeekerId } });
            const data = await response.json();
            console.log(data)
            const jobsResponse = await axios.get(`http://127.0.0.1:5000/viewappliedjobs/${data}`, { headers: { id: data } });

            const jobsWithStatus = [];
            for (const job of jobsResponse.data) {
                const statusResponse = await axios.get(`http://127.0.0.1:5000/fetchjobseekerstatus/${job.jobid}/${jobSeekerId}`);
                const statusData = statusResponse.data;
                jobsWithStatus.push({ ...job, status: statusData.status });
            }

            setJobs(jobsWithStatus);
        } catch (error) {
            console.error('Error fetching applied jobs data:', error);
        }
    };

return (
    <div className='jobseeker-profile-container'>
            <h1 className='jobseeker-profile-text'>User Profile</h1>
            <div className='jobseeker-profile-data'>
            <p>Name: {userData.jobseekername}</p>
            <p>Email: {userData.jobseekermail}</p>
            <p>Qualifications: {userData.qualifications}</p>
            <p>Skills: {userData.interests}</p>
             </div>

            <h2 className='jobseeker-profile-subtext'>Applied Jobs</h2>
            <div className="job-card-container">
                {jobs.map(job => (
                    <div className="job-card" key={job.jobid}>
                        <h3>{job.job}</h3>
                        <p>Description: {job.description}</p>
                        <p>Qualification: {job.qualification}</p>
                        <p>Location: {job.location}</p>
                        <p>Salary: {job.salary}</p>
                        <p>JOB ID: {job.jobid}</p>
                        <p>Status: {job.status}</p>
                    </div>
                ))}
            </div>



        </div>
    );
 };


export default ViewJobSeekerForAdmin;
