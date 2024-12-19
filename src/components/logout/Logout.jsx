// src/components/logout/Logout.jsx

"use client";
import React from "react";
import { useRouter } from "next/navigation"; 
import { destroyCookie } from "nookies"; // If using cookies

function LogoutComponent() {
  const router = useRouter();

  const logOut = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      console.log("Logout button clicked!");

      // Clear localStorage or cookies
      //localStorage.removeItem("jwtToken"); // Example for localStorage
      destroyCookie(null, "token"); // If using cookies
      destroyCookie(null, "name");

      // Optional: Notify backend of logout
      try {
        await axios.post("http://localhost:5000/auth/logout");
        console.log("Successfully logged out on the server.");
      } catch (error) {
        console.error("Error during server-side logout:", error);
      }

      // Redirect to login page
      router.push("/login");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "0vh" }}
    >
      <button type="button" className="btn btn-success pt-2 pb-2 px-2" onClick={logOut}>
        Logout
      </button>
    </div>
  );
}

export default LogoutComponent;
