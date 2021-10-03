import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
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
          <h1>Login</h1>
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

          <input type="checkbox" name="remember"></input>
          <label className="remember" htmlFor="remember">
            Remember me
          </label>
          <br></br>

          <button type="submit">LOGIN</button>
          <br></br>

          <Link to="/forgot">Forgot Password?</Link>
          <br></br>
          <Link to="/signup">Don't have an account? Sign Up</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
