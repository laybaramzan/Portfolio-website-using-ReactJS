import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./works.css";
import proj1 from "../../assets/prescripto.PNG";
import proj2 from "../../assets/shopper.PNG";
import proj3 from "../../assets/giftos.PNG";
import proj4 from "../../assets/company.PNG";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return (
    <div className="container text-center my-4">
      <div className="row g-4">
        <h1 className="heading">My Portfolio</h1>
        <p className="text-center portfolio-desc">
          I take pride in paying attention to the smallest detail and making
          sure that my work is pixel perfect.i am excited to bring my skills and
          experience to help businessses achieve their goal and create a strong
          online presence.
        </p>
        <div className="col-md-3 col-sm-6">
          <a
            href="https://doctors-appointment-booking-website.vercel.app/"
            target="_blank"
          >
            <img
              src={proj1}
              className="img-fluid rounded shadow zoom-effect"
              data-aos="zoom-in"
              alt="Doctors Appointment"
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6">
          <a href="https://my-online-bookstore-phi.vercel.app/" target="_blank">
            <img
              src={proj2}
              className="img-fluid rounded shadow zoom-effect"
              data-aos="zoom-in"
              alt="Online Bookstore"
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6">
          <a
            href="https://gift-shop-website.vercel.app/index.html?"
            target="_blank"
          >
            <img
              src={proj3}
              className="img-fluid rounded shadow zoom-effect"
              data-aos="zoom-in"
              alt="Gift Shop"
            />
          </a>
        </div>

        <div className="col-md-3 col-sm-6">
          <a
            href="https://company-website-iota-eight.vercel.app/#PORTFOLIO"
            target="_blank"
          >
            <img
              src={proj4}
              className="img-fluid rounded shadow zoom-effect"
              data-aos="zoom-in"
              alt="Company Website"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Works;
