import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/images.png";
const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <img src={logo} className="logo" />
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item link1">
                <Link to="home">Home</Link>
              </li>

              <li className="nav-item link2">
                <Link to="about">About</Link>
              </li>
              <li className="nav-item link3">
                <Link to="portfolio">Portfolio</Link>
              </li>
              <li className="nav-item link4">
                <Link to="clients">Clients</Link>
              </li>
            </ul>
            <Link to="contact"><button className="btn btn-light ">Contact Me</button></Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
