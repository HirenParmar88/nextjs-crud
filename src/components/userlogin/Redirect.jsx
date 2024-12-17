
// src/components/userlogin/Redirect.jsx

"use client";
import { useEffect, useState } from "react";
import LogoutComponent from "../logout/Logout";
import { parseCookies } from 'nookies';
import NavigationBar from "../navigationBar/navigationBar";
import Footer from "../footer/Footer";
import styled from "styled-components";

function Redirect() {
  const [name, setName] = useState(''); // Initialize state for username
  
  useEffect(()=>{
    const cookies = parseCookies()
        setName(cookies.name)
     }, [])

  return (
    <>
      <NavigationBar />
      {/* <h2 align="center">Admin Add Users</h2>
      <AddUserStyle>
        <AddUser />
      </AddUserStyle> */}

      {/* <h3 align="right">Logged In : {name} </h3> */}

      {/* <LogoutComponent /> */}
      <PaddingFooter>
        <Footer />
      </PaddingFooter>
    </>
  );
}

// styled Components
const PaddingFooter= styled.div`
  margin-top: 100px;
  //padding-top: 100px;
`;

const AddUserStyle = styled.div`
  padding: 50px 20px 100px 20px;
`;

export default Redirect;
