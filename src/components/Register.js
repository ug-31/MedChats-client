import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="login-box">
        <div className="image">
          <img
            className="login-image"
            src="https://i.pinimg.com/originals/48/00/bd/4800bd2e61a52c0cf366ffad714dd25c.jpg"
            alt="doctor illustration"
            // width="400px"
          />
        </div>
        <form className="the-form">
          <h1>Register</h1>
          <label htmlFor="email">Email Address</label>
          <br></br>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
          ></input>
          <br></br>

          <label htmlFor="password">Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter 6 characters or more"
          ></input>

          <label htmlFor="password">Confirm Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            placeholder="Enter your password again"
          ></input>
          <br></br>
          <input type="checkbox" name="remember"></input>
          <label className="remember" htmlFor="remember">
            Remember me
          </label>
          <br></br>

          <button type="submit">Register</button>
          <br></br>

          <Link className="link" to="/login">
            Already have an account? Sign In
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
