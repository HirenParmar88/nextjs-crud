// src/app/logout/page.js

'use client';
import { useState } from "react";
import { useRouter } from "next/router";
import LogoutComponent from "@/components/logout/Logout";

function UserLogoutComponent(){
    const router = useRouter();

  
  return(
    <>
       <LogoutComponent />

    </>
  )
}
export default UserLogoutComponent;