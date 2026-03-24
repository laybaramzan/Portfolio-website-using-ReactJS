import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "./works.css";
import proj1 from "../../assets/prescripto.jpeg";
import proj2 from "../../assets/shopper.jpeg";
import proj3 from "../../assets/gifto.jpeg";
import proj4 from "../../assets/company.jpeg";
import proj5 from "../../assets/clifton.jpeg";
import proj6 from "../../assets/belfor.jpeg";
import proj7 from "../../assets/printdecor.jpeg";
import proj8 from "../../assets/gamebreaker.jpeg";
import proj9 from "../../assets/kaveolah.jpeg";
import proj10 from "../../assets/orthorejuv.jpeg";

const Works = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Easing option
    });
  }, []);

  return (
    <div className="container text-center my-4" id="portfolio">
      <div className="row g-4">
        <h1 className="heading">My Portfolio</h1>
        <p className="text-center portfolio-desc">
          I take pride in paying attention to the smallest detail and making
          sure that my work is pixel perfect.i am excited to bring my skills and
          experience to help businessses achieve their goal and create a strong
          online presence.
        </p>
        <h5 className="subheading">Custom Shopify Store Design & Development:</h5>
        <div className="col-md-4 col-sm-6">
  <div className="project-card">
    <a href="https://laiba-ramzan.myshopify.com/" target="_blank" rel="noreferrer">
      <img
        src={proj5}
        className="img-fluid rounded shadow projimg"
        alt="Shopify Store"
      />

      <div className="overlay">
        <p>Password: <strong>clifton</strong></p>
      </div>
    </a>
  </div>
</div>

        <div className="col-md-4 col-sm-6">
  <div className="project-card">
    <a href="https://belforart.com/" target="_blank" rel="noreferrer">
      <img
        src={proj6}
        className="img-fluid rounded shadow projimg"
        alt="Shopify Store"
      />

      <div className="overlay">
        <p>Password: <strong>belfor@123</strong></p>
      </div>
    </a>
  </div>
</div>

        <div className="col-md-4 col-sm-6">
  <div className="project-card">
    <a href="https://printdecor-com-au.myshopify.com/" target="_blank" rel="noreferrer">
      <img
        src={proj7}
        className="img-fluid rounded shadow projimg"
        alt="Shopify Store"
      />

      <div className="overlay">
        <p>Password: <strong>1122</strong></p>
      </div>
    </a>
  </div>
</div>

       <div className="col-md-4 col-sm-6">
  <div className="project-card">
    <a href="https://gamebreaker-com.myshopify.com/" target="_blank" rel="noreferrer">
      <img
        src={proj8}
        className="img-fluid rounded shadow projimg"
        alt="Shopify Store"
      />

      <div className="overlay">
        <p>Password: <strong>biweam</strong></p>
      </div>
    </a>
  </div>
</div>
        <div className="col-md-4 col-sm-6">
          <a
            href="https://kaveolah.com/"
            target="_blank"
          >
            <img
              src={proj9}
              className="img-fluid rounded shadow zoom-effect projimg"
              data-aos="zoom-in"
              alt="Gift Shop"
            />
          </a>
        </div>

        <div className="col-md-4 col-sm-6">
          <a
            href="https://www.shoporthorejuv.com/"
            target="_blank"
          >
            <img
              src={proj10}
              className="img-fluid rounded shadow zoom-effect projimg"
              data-aos="zoom-in"
              alt="Company Website"
            />
          </a>
        </div>
        <h5 className="subheading">Frontend Web Applications (React.js, JavaScript & Modern CSS):</h5>
        <div className="col-md-4 col-sm-6">
          <a
            href="https://doctors-appointment-booking-website.vercel.app/"
            target="_blank"
          >
            <img
              src={proj1}
              className="img-fluid rounded shadow zoom-effect projimg"
              data-aos="zoom-in"
              alt="Doctors Appointment"
            />
          </a>
        </div>

        <div className="col-md-4 col-sm-6">
          <a href="https://my-online-bookstore-phi.vercel.app/" target="_blank">
            <img
              src={proj2}
              className="img-fluid rounded shadow zoom-effect projimg"
              data-aos="zoom-in"
              alt="Online Bookstore"
            />
          </a>
        </div>

        <div className="col-md-4 col-sm-6">
          <a
            href="https://gift-shop-website.vercel.app/index.html?"
            target="_blank"
          >
            <img
              src={proj3}
              className="img-fluid rounded shadow zoom-effect projimg"
              data-aos="zoom-in"
              alt="Gift Shop"
            />
          </a>
        </div>

        <div className="col-md-4 col-sm-6">
          <a
            href="https://company-website-iota-eight.vercel.app/#PORTFOLIO"
            target="_blank"
          >
            <img
              src={proj4}
              className="img-fluid rounded shadow zoom-effect projimg"
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
