//src/app/login/page.js

"use client"  
import LoginComponents from "@/components/userlogin/userLogin";
import React, { useEffect, useState } from "react";


function UsersLogin() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    

    return () => {};
  }, []);


  return (
    <>
     
      <LoginComponents />
      
    </>
  );
}

export default UsersLogin;
