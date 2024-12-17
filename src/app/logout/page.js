// src/app/logout/page.js

'use client';
import { useState } from "react";
import { useRouter } from "next/router";
import LogoutComponent from "@/components/logout/Logout";
import Footer from "@/components/footer/Footer";
import NavigationBar from "@/components/navigationBar/navigationBar";

function UserLogoutComponent(){
    const router = useRouter();

  return(
    <>  
      <NavigationBar />
      <LogoutComponent />
      <Footer />
    </>
  )
}
export default UserLogoutComponent;