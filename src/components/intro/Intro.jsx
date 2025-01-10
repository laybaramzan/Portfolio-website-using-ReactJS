import React, { useEffect } from "react";
import "./Intro.css";

import women from "../../assets/women.png";
import Resume from "../../assets/LaibaRamzanResume.pdf";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Intro = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

 const  handledownload=()=>{
  const resumeUrl =process.env.PUBLIC_URL+Resume;
window.open(resumeUrl,"_blank");
 }
  return (
    <div className="container "id="home">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 intro" data-aos="fade-right">
          <div>Hello!</div>

          <h1>
            I'm Laiba,
            <div>Frontend Web Developer.</div>
          </h1>

          <p>
            I am a skilled and passionate web designer with experience in
            creating visually appealing and user-friendly websites.
          </p>
          <button className="btn btn-light" onClick={handledownload}>Download Resume</button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  " data-aos="fade-left">
          <img src={women} className="women"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
