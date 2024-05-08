import React, { useState, useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './CompanyLogin.css'


const CompanyLogin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [user_id, setUser_id] = useState('');
   
    const navigate = useNavigate();
     
    useEffect(() => {
      const storedUser_id = sessionStorage.getItem('user_id');
      if (storedUser_id) {
        setUser_id(storedUser_id);
      }
    }, []);

    const logInUser = (e) => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
              const user_id = response.data.id;
              sessionStorage.setItem('user_id', user_id);
                console.log(response);
                //console.log(response.data);
                console.log('teacherupload');
                navigate("/companyhome");
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
    }
 
    let imgs = [
      'https://as1.ftcdn.net/v2/jpg/03/39/70/90/1000_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg',
    ];
     
  return (
    <section className='bg2 '>
    <div className="container" id="container">
            <div className="form-container sign-in-container">
                <form >
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social" ><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g" ></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>Login</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social google"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    {/* <a href="/forgetpassword" style={{fontSize:"12px"}}>Forgot your password?</a> */}
                    <button className="login-button" style={{marginTop:"5px"}} onClick={(e) => { e.preventDefault();  logInUser(); }} >Login</button>
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

export default CompanyLogin