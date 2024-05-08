// ApplyForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import './ApplyJob.css'

const ApplyForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        resume: null

    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });

    };
    const {jobId} = useParams();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('email', formData.email);
            formDataToSend.append('name', formData.name);
            formDataToSend.append('resume', formData.resume);
            const user_id = sessionStorage.getItem("user_id");
        console.log(user_id)

        const response = await axios.post(`http://127.0.0.1:5000/apply/${user_id}/${jobId}`, formDataToSend,{headers:{id:user_id, jobId}});

    if (response.status === 200) {
        alert("Application submitted successfully");
        navigate("/jobseekerprofile");
    } else {
        alert("Failed to submit application");
    }
        } catch (error) {
            console.error("Error submitting application:", error);
        }
    };

    return (
        <div className="apply-form-container">
            <h2 style={{textAlign:"center",fontSize:"30px",padding:"30px"}}>Apply for Job</h2>
            <form className='apply-job-form' onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input style={{color:"black"}} className='inputbox' type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Name:</label>
                    <input style={{color:"black"}} className='inputbox' type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Resume:</label>
                    <input  className='inputbox' type="file" name="resume" onChange={handleFileChange} required />
                </div>

                <button style={{background:"#008DDA",marginTop:"15px",marginLeft:"120px"}} className='login-button' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ApplyForm;
