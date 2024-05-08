import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './JobSeekerProfile.css';

const UserProfile = () => {
    const [userData, setUserData] = useState({});
    const [jobs, setJobs] = useState([]);
    const [qualification, setQualification] = useState('');
    const [skills, setSkills] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [showSkillsPrompt, setShowSkillsPrompt] = useState(false);
    const [mesg, setMesg] = useState(true);
    const [collapsed, setCollapsed] = useState(true);
    const [message, setMessage] = useState('');
    const [qual,setqual]=useState(true);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        fetchUserData();
        fetchAppliedJobsData();
    }, []);

    const fetchUserData = async () => {
        const user_id = sessionStorage.getItem("user_id");
        console.log(user_id)
        try {
            const response = await fetch(`http://127.0.0.1:5000/user/profile/${user_id}`, { headers: { id: user_id } });
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchAppliedJobsData = async () => {
        const user_id = sessionStorage.getItem("user_id");
        try {
            const response = await fetch(`http://127.0.0.1:5000/fetchappliedjobs/${user_id}`, { headers: { id: user_id } });
            const data = await response.json();

            const jobsResponse = await axios.get(`http://127.0.0.1:5000/viewappliedjobs/${data}`, { headers: { id: data } });

            const jobsWithStatus = [];
            for (const job of jobsResponse.data) {
                const statusResponse = await axios.get(`http://127.0.0.1:5000/fetchjobseekerstatus/${job.jobid}/${user_id}`);
                const statusData = statusResponse.data;
                jobsWithStatus.push({ ...job, status: statusData.status, resumelink: statusData.resumelink });
            }

            setJobs(jobsWithStatus);
        } catch (error) {
            console.error('Error fetching applied jobs data:', error);
        }
    };

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:5000/logout", { withCredentials: true });
            navigate("/");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    const sendMessage = async () => {
        if (!qualification) return;
        addMsg(message);
        !showSkillsPrompt && window.setTimeout(addResponseMsg, 1000, "Enter your skills");
        if (!showSkillsPrompt) {
            setShowSkillsPrompt(true);
            return;
        }
        const user_id = sessionStorage.getItem("user_id");
        const response = await fetch(`http://localhost:5000/chatbot/${user_id}`, {
            method: 'POST',
            headers: {
                // 'id': user_id,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ qualification, skills }),
        });

        const data = await response.json();
        if (Array.isArray(data)) {
            const jobMessages = data.map((job, index) => `${index + 1}. ${job}`);
            setChatHistory([...chatHistory, `Based on your qualifications and skills, you can apply for the following job:`, ...jobMessages]);
        } else if (typeof data === 'object' && data !== null) {
            setChatHistory([...chatHistory, `Based on your qualifications and skills, we suggest applying for the following job:`, data.jobs]);
        } else {
            setChatHistory([...chatHistory, `No suitable job found.`]);
        }

        setQualification('');
        setSkills('');
        setShowSkillsPrompt(false);
        setMesg(false);
    };

    const addMsg = (msg) => {
        const div = document.createElement('div');
        div.innerHTML = `<span style='flex-grow:1'></span><div class='chat-message-sent'>${msg}</div>`;
        div.className = 'chat-message-div';
        document.getElementById('message-box').appendChild(div);
        setMessage('');
        document.getElementById('message-box').scrollTop = document.getElementById('message-box').scrollHeight;
    };

    const addResponseMsg = (msg) => {
        const div = document.createElement('div');
        div.innerHTML = `<div class='chat-message-received'>${msg}</div>`;
        div.className = 'chat-message-div';
        document.getElementById('message-box').appendChild(div);
        document.getElementById('message-box').scrollTop = document.getElementById('message-box').scrollHeight;
        setRunning(false);
    };

    const handleToggle = () => {
        if (collapsed) {
            document.getElementById('chatbot').classList.remove('collapsed');
            document.getElementById('chatbot_toggle').children[0].style.display = 'none';
            document.getElementById('chatbot_toggle').children[1].style.display = '';
        } else {
            document.getElementById('chatbot').classList.add('collapsed');
            document.getElementById('chatbot_toggle').children[0].style.display = '';
            document.getElementById('chatbot_toggle').children[1].style.display = 'none';
        }
        setCollapsed(!collapsed);
    };

    return (
        <div className='jobseeker-profile-container'>
            <h1 className='jobseeker-profile-text'>User Profile</h1>
            <div className='jobseeker-profile-data'>
            <p>Name: {userData.name}</p>
            <p>Username: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <button style={{marginTop:"20px"}} className='login-button'><Link to="/jobs">View Recommended Jobs</Link></button>
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
                        <p>ResumeLink: {job.resumelink}</p>
                    </div>
                ))}
            </div>
            <button onClick={handleLogout}>Logout</button>

            <div className="title">
                <div>
                    <div id="chatbot" className={`main-card ${collapsed ? 'collapsed' : ''}`}>
                        <button id="chatbot_toggle" onClick={handleToggle}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: `${collapsed ? '' : 'none'}` }}>
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ display: `${collapsed ? 'none' : ''}` }}>
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                            </svg>
                        </button>
                        <div className="main-title">
                            <div>
                                <svg viewBox="0 0 640 512" title="robot">
                                    <path fill="currentColor" d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
                                </svg>
                            </div>
                            <span>Chatbot</span>
                        </div>
                        {mesg && (
                            <div className="chat-area" id="message-box">
                                <div class='chat-message-received'>Enter your highest qualification(10th or 12th)</div>
                                <div className="chat-message-received ChatHistory"></div>
                            </div>
                        )}
                        {!mesg && (
                            <div className="chat-area" id="message-box">
                                <div className="chat-message-received ChatHistory">
                                    {chatHistory.map((message, index) => (
                                        <div key={index} className="Message">
                                            <p>{message}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <div className="line"></div>
                        <div className="input-div">
                            {mesg && qual &&(
                                <input style={{color:"#000"}} className='input-message'
                                    type="text"
                                    placeholder="Type your message ..."
                                    value={qualification}
                                    onChange={(e) => { setQualification(e.target.value); setMessage(e.target.value); }}
                                    disabled={showSkillsPrompt}
                                />
                            )}
                            {mesg && showSkillsPrompt && (
                                <input style={{color:"#000"}} className='input-message'
                                    type="text"
                                    placeholder="Type your message ..."
                                    value={skills}
                                    onChange={(e) => { setSkills(e.target.value); setMessage(e.target.value); }}
                                />
                            )}
                            {mesg && <button className="input-send" onClick={() => { sendMessage(); setqual(false); }} >
                                <svg style={{ width: '24px', height: '24px' }}>
                                    <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                                </svg>
                            </button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
