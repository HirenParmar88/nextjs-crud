//src/components/user/userSignUp.jsx

'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';

function UsersSignUp(){

  useEffect(() => {
    //getUser();
    
    return () => {
      
    }
  }, [])
  
  return(
    <>
    <div className="container mt-5">
      <h2 className="text-center mb-4">Sign Up User</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
            </div>

            {/* Mobile */}
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile</label>
              <input type="tel" className="form-control" id="mobile" placeholder="Enter your mobile number" required />
            </div>
            
            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="Male" required />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="Female" />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="gender" id="other" value="Other" />
                  <label className="form-check-label" htmlFor="other">Other</label>
                </div>
              </div>
            </div>

            {/* New Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter a new password" required />
            </div>

            {/* Retype Password */}
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
              <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" required />
            </div>

            {/* City Dropdown */}
            <div className="mb-3">
              <label htmlFor="city" className="form-label">City</label>
              <select className="form-select" id="city" required>
                <option value="Ahmedabad" disabled selected>Select your city</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default  UsersSignUp;