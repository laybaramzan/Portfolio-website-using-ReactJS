import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import insta from "../../assets/insta.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o4txsmd", "template_row7gsh", form.current, {
        publicKey: "KesbBLAzTy-jzO7FP",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container ">
      <div className="row">
        <h1 className="heading" id="clients">
          My Clients
        </h1>
        <p className="client-desc text-center">
          i had the oppourtunity to work with the diverse group of
          companies.some of the notable companies i have worked with includes:
        </p>
        <div className="slider-container">
          <div className="slider d-flex justify-content-center align-items-center">
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3 ">
              <a href="https://www.walmart.com/">
                <img src={walmart} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.adobe.com/">
                <img src={adobe} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.microsoft.com/en-pk">
                <img src={microsoft} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.facebook.com/">
                <img src={facebook} className="client-img "></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3 ">
              <a href="https://www.walmart.com/">
                <img src={walmart} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.adobe.com/">
                <img src={adobe} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.microsoft.com/en-pk">
                <img src={microsoft} className="client-img mb-1"></img>
              </a>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-x-3">
              <a href="https://www.facebook.com/">
                <img src={facebook} className="client-img "></img>
              </a>
            </div>
          </div>
        </div>
        <h1 className="heading mt-5" id="contact" data-aos="fade-up">
          Contact Me
        </h1>
        <p className="contact-desc" data-aos="fade-up">
          please fill out the form below to discuss any work oppourtunities.
        </p>
        <form data-aos="fade-up" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="your name"
            className="form-control "
            name="from_name"
          ></input>
          <input
            type="text"
            placeholder="your email"
            className="form-control"
            name="from_email"
          ></input>

          <textarea
            rows={4}
            cols={50}
            placeholder="your message"
            className="form-control"
            name="message"
          ></textarea>

          <input className="btn btn-light batan" type="submit" value="Submit" />
        </form>
        <div className=" social-media">
          <a href="https://www.facebook.com/">
            <img src={fb} className="socialmedia "></img>
          </a>
          <a href="https://www.twitter.com/">
            <img src={twitter} className="socialmedia "></img>
          </a>
          <a href="https://www.youtube.com/">
            <img src={yt} className="socialmedia "></img>
          </a>
          <a href="https://www.instagram.com/">
            <img src={insta} className="socialmedia "></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
