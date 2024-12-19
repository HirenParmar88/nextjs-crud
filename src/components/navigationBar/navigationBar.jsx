// src/components/navigationBar/navigationBar.jsx

'use client'
import Link from "next/link"; 
import LogoutComponent from "../logout/Logout";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";

function NavigationBar() {
  const [name, setName] = useState(' ');
  useEffect(()=>{
    const cookies = parseCookies()
      setName(cookies.name)
  },[]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary text-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">My Project</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/accessories">Accessory</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="text-text-danger nav-nav-item pt-2 ">
              Welcome to { name }
            </li>

            {name &&( <li className="pt-3">
              <LogoutComponent />
              </li>
            )}
              
            {!name &&(<li className="nav-item">
              <Link className="nav-link" href="/login">
                <i className="fas fa-sign-in-alt px-0"></i> Login
              </Link>
            </li>)}

          </ul>
        </div>
      </div>
    </nav>

    </>
  );
}

export default NavigationBar
