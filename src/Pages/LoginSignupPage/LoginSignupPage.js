import React from 'react'
import './LoginSignupPage.css'

const LoginSignupPage = () => {
  return (
    <div className='loginSignup'>
      <div className=' loginsignupContainer'>
        <h1>SignUp</h1>
        <div className='loginSoignup-fields'>
          <input type="text" placeholder='Your Name'/>
          <input type='email' placeholder='Email Adress'/>
          <input type="password" placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginSignup-login'>Already have an account <span>Login here</span></p>
        <div className='loginSignup-agree'>
          <input type='checkbox' name= '' id=''/>
          <p>By continuing i agree to the terms of use and privacy policy</p>
        </div>
      </div>

    </div>
  )
}

export default LoginSignupPage