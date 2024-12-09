// src/components/logout/Logout.jsx

"use client"
import React, { useState } from "react";
import axios from "axios";
import { redirect, useRouter } from "next/navigation"; 

function LogoutComponent() {

  const router = useRouter(); //to define next page root

  //logout function
  const logOut=()=>{
    console.log('logout btn clicked !!');
     // Clear the user's authentication token or session data
     localStorage.removeItem("jwtToken"); // Example for token stored in localStorage
     // If using cookies, clear the cookies here
     
     // Redirect to the login page
     router.push("/login");  //folder based routing 
  }

  return (
    <>
         <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh" }}
      >
        <button type="button" className="btn btn-danger" onClick={logOut}>
          Logout
        </button>
      </div>
    </>
  );
}

export default LogoutComponent;
