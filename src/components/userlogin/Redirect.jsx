
// src/components/userlogin/Redirect.jsx

"use client";
import { useEffect, useState } from "react";
import LogoutComponent from "../logout/Logout";
import { parseCookies } from 'nookies';

function Redirect() {
  const [name, setName] = useState(''); // Initialize state for username
  
  useEffect(()=>{
    const cookies = parseCookies()
        setName(cookies.name)
     }, [])

  return (
    <>
      <h1>User home page.. {name} </h1>
      <LogoutComponent />
    </>
  );
}

export default Redirect;
