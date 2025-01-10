import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./works.css";
import proj1 from "../../assets/proj1.png";
import proj2 from "../../assets/proj6.png";
import proj3 from "../../assets/proj3.png";
import proj4 from "../../assets/proj4.png";
import proj5 from "../../assets/proj5.png";
import proj6 from "../../assets/proj2.png";

const Works = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return (
    <div className="container" id="portfolio">
      <div className="row">
        <h1 className="heading">My Portfolio</h1>
        <p className="text-center portfolio-desc">
          I take pride in paying attention to the smallest detail and making
          sure that my work is pixel perfect.i am excited to bring my skills and
          experience to help businessses achieve their goal and create a strong
          online presence.
        </p>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj1} className="projimg" data-aos="zoom-in"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj3} className="projimg" data-aos="zoom-in"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj5} className="projimg" data-aos="zoom-in"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj2} className="projimg" data-aos="zoom-in"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj4} className="projimg" data-aos="zoom-in"></img>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <img src={proj6} className="projimg"data-aos="zoom-in"></img>
        </div>
      </div>
      <button className="btn btn-light batan">See More</button>
    </div>
  );
};

export default Works;
