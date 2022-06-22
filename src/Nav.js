import React from "react";
import './App.css';


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light mb-4 py-4">
            <div className="container">
                <a className="navbar-brand fw-bold fs-2" href="/">Atomic</a>
                <button className="navbar-toggler px-2 py-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">FAQs</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <div className="ms-auto mt-3 mt-lg-0">
                            <a href="/" className="btn btn-sm px-3 btn-success rounded-pill shadow-sm me-3">Login</a>
                            <a href="/" className="btn btn-sm px-3 btn-light rounded-pill shadow-sm">Sign Up</a>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;