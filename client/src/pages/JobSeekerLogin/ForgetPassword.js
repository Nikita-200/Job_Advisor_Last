import React from 'react'
import './ForgetPassword.css'

const ForgetPassword = () => {
  return (
    <div class="login-page">
      <div class="form">

        <form class="login-form">
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Retype Password"/>
          <button>Reset Password</button>
          {/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>
    </div>

  )
}

export default ForgetPassword