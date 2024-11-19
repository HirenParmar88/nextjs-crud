//src/app/userSignUp/page.js

'use client'
import NavigationBar from "@/components/navigationBar/navigationBar";
import React, { useEffect } from "react";

function UsersLogin(){

    useEffect(() => {
      //getUser();
      
      return () => {
        
      }
    }, [])
    
    return(
      <>
      
    <NavigationBar />

      <div className="container mt-5">
        <h2 className="text-center mb-4">Log In User</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            
              {/* Username */}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
              </div>

              {/* password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="text" className="form-control" id="password" placeholder="Enter your password" required />
              </div>
  
              {/* Submit Button */}
              <div className="d-flex mb-3">
                <button type="submit" className="btn btn-primary mx-1">Login</button>
                <button type="submit" className="btn btn-danger">Cancel</button>
              </div>

          </div>
        </div>
      </div>
      </>
    );
  }
  export default  UsersLogin;