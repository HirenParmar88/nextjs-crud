//src/components/userlogin/userLogin.jsx

"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation"; 
import { setCookie } from 'nookies'
import BtnHome from "../backbtn/backButton";
import styled from "styled-components";

function LoginComponents() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //User Login
  const handleUserLogin = async (e) => {
    e.preventDefault();
    console.log("Login button clicked..!!");
    console.log('username :', username);
    console.log('password :', password);
  
    try {
      // Make a POST request to the backend API
      const res = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
      });
      console.log(res.data);
      // Extract the response data

      if (res.data.success) {
        //document.cookie=`username=${user.name}; path=/;`;
        console.log("Successfully logged in!");
        console.log("User details:", res.data.user);
       
        setUsername("");
        setPassword("");
        alert('successfully loggedIn');
        setCookie(null, "token", res.data.user.jwtToken)
        setCookie(null, "name", res.data.user.name)
        router.push('/')
      } else {
        console.log("Invalid username or password.");
        alert('Invalid username or password')
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLiginCancelBtn = () => {
    console.log("cancel btn clicked !");
    setUsername("");
    setPassword("");
  };

  const BtnHomeStyle = styled.div`
    align-items: left;
    margin: 10px 0px 0px 10px;
  `;
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Log In Page</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="login-username"
                placeholder="Enter your username"
                required
                value={username}
                onChange={e =>  setUsername(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="login-password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={e =>  setPassword(e.target.value)}
          
              />
            </div>

            {/* Submit Button */}
            <div className="d-flex mb-3">
              <button
                type="submit"
                className="btn btn-primary mx-1"
                onClick={handleUserLogin}
              >
                Login
              </button>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={handleLiginCancelBtn}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      <BtnHomeStyle>
      
        <BtnHome />

      </BtnHomeStyle>
    </>
  );
}

export default LoginComponents;
