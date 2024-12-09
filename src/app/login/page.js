//src/app/login/page.js

"use client"
import NavigationBar from "@/components/navigationBar/navigationBar";
import LoginComponents from "@/components/userlogin/userLogin";
import React, { useEffect, useState } from "react";

function UsersLogin() {
  const [loading, setLoading] = useState(false);
  //const [data,setData]=useState("Hello world")
  useEffect(() => {
    //getUser();

    return () => {};
  }, []);

  // const data = () => {
  //   setLoading(true);
  //   try {
  //     console.log("try block..");
  //   } catch (error) {
  //     console.error("error occured !!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <NavigationBar />
      <LoginComponents />
    </>
  );
}

//handleLiginCancelBtn={handleLiginCancelBtn}
export default UsersLogin;
