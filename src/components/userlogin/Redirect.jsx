// src/components/userlogin/Redirect.jsx

"use client";
import { useState } from "react";
import LogoutComponent from "../logout/Logout";

function Redirect(){
    return(
        <>
            <h1>User home page..</h1>

            <LogoutComponent/>
        </>
    )
}
export default Redirect;