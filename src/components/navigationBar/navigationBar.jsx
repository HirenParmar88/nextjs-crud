// src/components/navigationBar/navigationBar.jsx

'use client'
import Link from "next/link"; 

function NavigationBar() {

  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <Link className="nav-link active" aria-current="page" href="/">
                <i className="fas fa-home px-0"></i> Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Page 1
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Page 1-1</a></li>
                <li><a className="dropdown-item" href="#">Page 1-2</a></li>
                <li><a className="dropdown-item" href="#">Page 1-3</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/page2">Page 2</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="/userSignUp">
                <i className="fas fa-user-plus px-0"></i> Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/login">
                <i className="fas fa-sign-in-alt px-0"></i> Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  );
}

export default NavigationBar
