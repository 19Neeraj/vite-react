import React, { useEffect, useState } from "react";
import "./Contact.css";
import logo from "../images/extra/logo.png";
import play from "../images/pay/play.jpg";
import app from "../images/pay/app.jpg";
import pay from "../images/pay/pay.png"; 
import p1 from "../images/people/1.png";
import p2 from "../images/people/2.png";
import p3 from "../images/people/3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
export default function Contact() {
  const [clicked, setClicked] = useState(false);
  const addstyle = () => {
    setClicked(true);
  };
  const initialstate = {
    Name: "",
    Email: "",
    Subject: "",
    Text: "",
  };
  const [state, setState] = useState(initialstate);
  const { Name, Email, Subject, Text } = state;
  const [formSubmit, setFromSubmit] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  
  const Submit = (e) => {
    e.preventDefault();
    setFromSubmit(true);
  };
  
  useEffect(() => {
    if (formSubmit === true) {
      console.log("api will call");
      axios
        .post("http://localhost:5000/coustmers", state)
        .then((res) => {
          console.log("data inserted", res);
        })
        .catch((err) => {
          console.log("error occurred", err);
        });
    }
  }, [formSubmit]); // Add formSubmit as a dependency to trigger the effect when it changes
  
  
  return (
    <>
      <section className="contact" id="contact"> 
        <div className="contact-banner" id="contact-banner">
          <h1>#Let's Talk</h1>
          <h5>Leave a message, we love to hear from you</h5>
        </div>
        <div className="contact-details-map" id="contact-details-map">
          <div className="contact-details1" id="contact-details1">
            <h6>Get In Touch</h6>
            <h3>
              Visit One Our Outlet Location <br /> or Tontact Us Today
            </h3>
            <ul>
              <li>
                <strong>Head Office</strong>
              </li>
              <li>
                <FontAwesomeIcon icon={faMapLocationDot} /> 56 Glassford Street
                Glasgow G1 1UL New York
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                caranewyork@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                +1 256-478-93-52 | +91 78-95-463-210
              </li>
              <li>
                <FontAwesomeIcon icon={faClock} /> 09:00-08:00 | Monday to
                Staturday <strong>Sunday Off</strong>
              </li>
            </ul>
          </div>
          <div className="contact-map" id="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.04757884255!2d-74.31003581519208!3d40.697537983098805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1693546888539!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-form" id="contact-form">
          <div className="form" id="from">
            <span>Leave A Message</span>
            <h4>We Love To Hear From You</h4>
            <form action="#" onSubmit={Submit}>
              <input
                type="text"
                id="name"
                required
                name="Name"
                value={Name}
                onChange={handleChange}
                placeholder="Your Name"
              />
              {/* ---------------------------------- */}
              <input
                type="text"
                id="email" 
                required
                name="Email"
                value={Email}
                onChange={handleChange}
                placeholder="E-mail"
              />
              {/* ---------------------------------- */}
              <input
                type="text"
                id="subject"
                required
                name="Subject"
                value={Subject}
                onChange={handleChange}
                placeholder="Subject"
              />
              {/* ---------------------------------- */}
              <textarea
                id="text"
                cols="30"
                rows="10"
                placeholder="Your Message"
                name="Text"
                value={Text}
                onChange={handleChange}
              ></textarea>
              <button id="form-button" type="submit" onSubmit={Submit}>
                Submit
              </button>
            </form>
          </div>
          <div className="people" id="people">
            <div className="person1" id="person1">
              <img src={p1} alt="" />
              <h4>Jhon Doe</h4>
              <span>Senior Marketing Manager</span>
              <span>Phone : +000-123-000-77-88</span>
              <span>Email : doejhonSMM@gmail.com</span>
            </div>
            <div className="person2" id="person2">
              <img src={p2} alt="" />
              <h4>Jhon Doe</h4>
              <span>Senior Marketing Manager</span>
              <span>Phone : +000-123-000-77-88</span>
              <span>Email : doejhonSMM@gmail.com</span>
            </div>
            <div className="person3" id="person3">
              <img src={p3} alt="" />
              <h4>Jhon Doe</h4>
              <span>Senior Marketing Manager</span>
              <span>Phone : +000-123-000-77-88</span>
              <span>Email : doejhonSMM@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="contact-news-letter" id="contact-news-letter">
          <div className="contact-news-letter1" id="contact-news-letter1">
            <h2>SignUp For News-Letters</h2>
            <p>
              Get E-mail update of our latest contact trends and <br id="br" />
              <strong> Special Offers</strong>
            </p>
          </div>
          <div className="contact-news-letter2" id="contact-news-letter2">
            <input
              type="text"
              placeholder="example@mail.com"
              autoComplete="off"
            />
            <button
              onClick={addstyle}
              className={`contact-custom-button ${
                clicked ? "hover-effect" : ""
              }`}
            >
              {" "}
              Sign-Up{" "}
            </button>
          </div>
        </div>
        <div className="contact-footer" id="contactfooter">
          <div className="contact-image" id="contact-image">
            <img src={logo} alt="Cara" />
            <div className="contact-address">
              <h3> Contact </h3>
              <p>
                <strong>Address : </strong> 562 Wellinton Road, Street 32, San
                Francisco
              </p>
              <p>
                <strong>Phone : </strong> +01 2222-365 | +91 234-56-789-01
              </p>
              <p>
                <strong>Outlet-Timing (India) : </strong>09:00 - 08:00, Monday -
                Sunday <strong> Tuesday Off </strong>{" "}
              </p>
              <p>
                <strong>Outlet-Timing (USA) : </strong>010:00 - 09:00, Monday -
                Saturday <strong> Sunday Off </strong>{" "}
              </p>
            </div>
            <div className="contact-icons" id="contact-icons">
              <h3>Follow Us</h3>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} id="contact-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} id="contact-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} id="contact-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} id="contact-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} id="contact-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTelegram} id="contact-icons" />
              </a>
            </div>
          </div>
          <div className="contact-about-account" id="contact-about-account">
            <div className="contact-about" id="contact-about">
              <h3>About Us </h3>
              <p>About Us </p>
              <p> Delivery Information</p>
              <p> Privacy Policy</p>
              <p> Terms and Conditions</p>
              <p>Contact Us</p>
            </div>
            <div className="contact-account1" id="contact-account1">
              <h3> My Account </h3>
              <p>Sign In</p>
              <p>View Cart</p>
              <p>My Wishlist</p>
              <p>Track My Order</p>
              <p>Help</p>
            </div>
          </div>
          <div className="contact-install" id="contact-install">
            <h3>Install Apss</h3>
            <p>From Play Store | App Store</p>
            <img src={play} alt="" id="contact-play" />
            <img src={app} alt="" id="contact-app" />
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
