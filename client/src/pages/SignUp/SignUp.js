
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
//import '@fortawesome/fontawesome-free/css/all.css';
import './SignUp.css'

const SignUp = () => {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [role,setRole] = useState('');
//    const [classid,setClassid] = useState('');
//    const [rollid,setRollid] = useState('');
    const [password,setPassword] = useState('');

    const navigate = useNavigate();

    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            name: name,
            username: username,
            email: email,
            role: role,
//            classid: classid,
//            rollid: rollid,
            password: password
        })
        .then(function (response) {
             const user_id = response.data.id;
             sessionStorage.setItem('user_id', user_id);
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };

    let imgs = [
      'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
    ];
  return (
    <section className='bg2 '>
    <div className="container" id="container">
            
            <div className="form-container sign-in-container">
                <form >
                    <h1>Sign UP</h1>
                    <div className="social-container">
                        <a href="#" className="social "><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social "><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <h1>Sign UP</h1>
                    <div className="social-container">
                        <a href="#" className="social "><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social "><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    {/* <span>or use your account</span> */}
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select form-select-lg" aria-label="Select Role">
                       <option value="">Select Role</option>
                       <option value="admin">Admin</option>
                       <option value="company">Company</option>
                       <option value="jobseeker">Job Seeker</option>

                     </select>
                     

                    {/* <a href="#" style={{fontSize:"12px"}}>Forgot your password?</a> */}
                    <button className="login-button" style={{marginTop:"5px", marginBottom:"5px"}} onClick={(e) =>{ e.preventDefault(); registerUser()}} >Sign Up</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        
                        {/* <button className="ghost" id="signIn">Sign In</button> */}
                    </div>
                    <div className="overlay-panel overlay-right">
                        
                        {/* <button className="ghost" id="signUp">Sign Up</button> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SignUp