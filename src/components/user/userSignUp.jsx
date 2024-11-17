//src/components/user/userSignUp.jsx

'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import BtnHome from "@/components/backbtn/backButton.jsx";
import { useEffect } from 'react';

function UsersSignUp(){

  useEffect(() => {
    //getUser();
    
    return () => {
      
    }
  }, [])
  
  return(
    <>
    <div>
      <h2 className='text-center mb-4 mt-2'>User Sign Up</h2>
      <BtnHome />
    </div>
    </>
  );
}
export default  UsersSignUp;