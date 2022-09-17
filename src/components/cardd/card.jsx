import React from 'react';


import './cardd.css';


  {/* Hello world */}

  const card = () => {
    return (
        <>
 <>
  <div className="container" id="js-container">
    <div className="form-container sign-up-container" tabIndex={-1}>
      {/* Sign Up form code goes here */}
      <form className="form js-createAccountForm">
        <h1 className="form-title">Create Account</h1>
        <div className="social-container">
          <a
            href="#"
            className="form-link social"
            aria-label="Sign up with Facebook"
          >
            <i className="fab fa-facebook-f" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="form-link social"
            aria-label="Sign up with Google Plus"
          >
            <i className="fab fa-google-plus-g" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="form-link social"
            aria-label="Sign up with Linkedin"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
        </div>
        <span className="form-text">or use your email for registration</span>
        <input className="form-input" type="text" placeholder="Name" />
        <input className="form-input" type="email" placeholder="Email" />
        <input className="form-input" type="password" placeholder="Password" />
        <button type="button" className="form-button js-signUp">
          Sign Up
        </button>
      </form>
    </div>{" "}
    {/* end .form-container */}
    <div className="form-container sign-in-container" tabIndex={-1}>
      {/* Sign In form code goes here */}
      <form className="form js-signInForm">
        <h1 className="form-title">Sign in</h1>
        <div className="social-container">
          <a
            href="#"
            className="form-link social"
            aria-label="Sign in with Facebook"
          >
            <i className="fab fa-facebook-f" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="form-link social"
            aria-label="Sign in with Google Plus"
          >
            <i className="fab fa-google-plus-g" aria-hidden="true" />
          </a>
          <a
            href="#"
            className="form-link social"
            aria-label="Sign in with Linkedin"
          >
            <i className="fab fa-linkedin-in" aria-hidden="true" />
          </a>
        </div>
        <span className="form-text">or use your account</span>
        <input className="form-input" type="email" placeholder="Email" />
        <input className="form-input" type="password" placeholder="Password" />
        <a href="#" className="form-link">
          Forgot your password?
        </a>
        <button type="button" className="form-button js-signIn">
          Sign In
        </button>
      </form>
    </div>{" "}
    {/* end .form-container */}
    <div className="overlay-container">
      {/* The overlay code goes here */}
      <div className="overlay">
        <div className="overlay-panel overlay-left" tabIndex={-1}>
          <h1 className="form-title">Welcome Back!</h1>
          <p className="form-details">
            To keep connected with us please login with your personal info
          </p>
          <button
            type="button"
            className="form-button switch-panel"
            id="js-openSignIn"
          >
            Open Sign In Form
          </button>
        </div>
        <div className="overlay-panel overlay-right" tabIndex={-1}>
          <h1 className="form-title">Hello, Friend!</h1>
          <p className="form-details">
            Enter your personal details and start journey with us
          </p>
          <button
            type="button"
            className="form-button switch-panel"
            id="js-openSignUp"
          >
            Open Sign Up Form
          </button>
        </div>
      </div>{" "}
      {/* end .overlay */}
    </div>{" "}
    {/* end .overlay-container */}
  </div>{" "}
  {/* end .container */}
  <a href="#" className="form-button delete-account">
    Need to delete your account?
  </a>
</>

</>

);
}

export default card;