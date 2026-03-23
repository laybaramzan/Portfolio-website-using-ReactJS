import React, { useEffect } from "react";
import "./skills.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import skill1 from "../../assets/ui-ux.png";
import skill2 from "../../assets/websitedesign.jpeg";
import skill3 from "../../assets/appdesign.png";
import skill4 from "../../assets/cms.jfif";
const Skills = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);


  return (
    <div className="container" id="about">
      <div className="row">
        <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 " data-aos="fade-up">
          <h1 className="heading">What I do</h1>
          <p className="summary text-center">
            I am a skilled and passionate web designer with experience in
            creating visually appealing and user-friendly websites.i have a
            strong understanding of design and a keen eye for detail.i am
            profficient in HTML, CSS, Bootstrap, javascript and ReactJS as well as design software
            such as Figma.
          </p>
          <div className="skills">
            <div className="d-flex skills-sections">
              <img src={skill4} className="skill-img col-2"></img>
              <div className="skills-para col-10">
                <b>CMS Development</b>
                <div>
                  Build and customize dynamic websites using CMS platforms like Shopify and Wordpress.
                </div>
              </div>
            </div>
            <div className="d-flex skills-sections">
              <img src={skill2} className="skill-img col-2"></img>
              <div className="skills-para col-10">
                <b>Frontend Web Development</b>
                <div>
                  Develop responsive and interactive web applications using React.js, Tailwind CSS, and modern JavaScript (JSX).
                </div>
              </div>
            </div>
            <div className="d-flex skills-sections">
              <img src={skill1} className="skill-img col-2"></img>
              <div className="skills-para col-10">
                <b>UI/UX design</b>
                <div>
                  Design intuitive, visually appealing user interfaces and experiences using Figma and Canva.
                </div>
              </div>
            </div>
            <div className=" skills-sections">
              <img src={skill3} className="skill-img col-2"></img>
              <div className="skills-para col-10">
                <b>MS Office</b>
                <div>
                  Create professional documents, presentations, and spreadsheets for business and academic use.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
