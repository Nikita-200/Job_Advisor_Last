import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [companies, setCompanies] = useState([]);
    const [jobSeekers, setJobSeekers] = useState([]);

    useEffect(() => {
        fetchCompanies();
        fetchJobSeekers();
    }, []);
    const navigate = useNavigate();
    const fetchCompanies = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/admincompanies');
            setCompanies(response.data);
        } catch (error) {
            console.error('Error fetching companies:', error);
        }
    };

    const fetchJobSeekers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/adminjobseekers');
            setJobSeekers(response.data);
        } catch (error) {
            console.error('Error fetching job seekers:', error);
        }
    };

    const handleViewCompany = (companyId) => {
        // Handle view company action
          try {
        navigate(`/viewcompanyforadmin/${companyId}`);
        } catch (error) {
            console.error('Error applying for job:', error);
        }

    };

    const handleDeleteCompany = (companyId) => {
        // Handle delete company action
          try {
        const response = axios.get(`http://127.0.0.1:5000/handledeletecompany/${companyId}`, { headers: { id: companyId } });
   window.location.reload();

    } catch (error) {
        console.error('Error deleting company:', error);
        // Optionally, you can handle errors here (e.g., show an error message)
    }
    };

    const handleViewJobSeeker = (jobSeekerId) => {
        // Handle view job seeker action
            try {
        navigate(`/viewjobseekerforadmin/${jobSeekerId}`);
        } catch (error) {
            console.error('Error applying for job:', error);
        }

    };

    return (
        <div className="container"> {/* Apply the container class */}
            <h2>Registered Companies</h2>
            <table className="table"> {/* Apply the table class */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {companies.map(company => (
                        <tr key={company.id}>
                            <td>{company.name}</td>
                            <td>{company.email}</td>
                            <td>
                                <button onClick={() => handleViewCompany(company.id)}>View</button>
                                <button className="delete" onClick={() => handleDeleteCompany(company.id)}>Delete</button> {/* Apply the delete class */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Registered JobSeekers</h2>
            <table className="table"> {/* Apply the table class */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {jobSeekers.map(jobSeeker => (
                        <tr key={jobSeeker.id}>
                            <td>{jobSeeker.name}</td>
                            <td>{jobSeeker.email}</td>
                            <td>
                                <button className="view-jobseeker" onClick={() => handleViewJobSeeker(jobSeeker.id)}>View JobSeeker Info</button> {/* Apply the view-jobseeker class */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
