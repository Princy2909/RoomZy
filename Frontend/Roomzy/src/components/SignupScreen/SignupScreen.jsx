import React from "react";
import '../src/components/SignupScreen/SignupScreen.css'
import SignupImage from '../src/assets/account.png'

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="modal">
        <img src={SignupImage} alt="Logo" className="modal-logo" />
        <h2>Sign Up</h2>
        <p>Welcome! Please enter your details to sign up</p>
        <form className="form-container">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="signup">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
