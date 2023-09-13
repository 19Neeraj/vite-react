import React ,{useState} from 'react'
import './About.css'
import logo from "../images/extra/logo.png";
import play from "../images/pay/play.jpg";
import app from "../images/pay/app.jpg";
import pay from "../images/pay/pay.png";
import a6 from "../images/about/a6.jpg"
import video from "../images/about/1.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export default function About() {
  const [clicked, setClicked] = useState(false);
  const addstyle = () => {
    setClicked(true);
  };
  return ( 
    <section className="about" id="about">
      <div className="about-banner" id="about-banner">
        <h1>#Know-Us</h1>
          <h5>know all about us What we are? | What we sell</h5>
      </div>
    <div className="about-container" id="about-container">
       <div className="sub-container1" id="sub-container1">
        <img src={a6} alt="" />
        <div className="sub-container-details" id="sub-container-details">
          <h1>Who We Are?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit error eos, omnis iste minima provident esse, mollitia vel dicta rerum tempora adipisci. Minima eaque sapiente sit assumenda perspiciatis voluptatem sed architecto totam reiciendis voluptatibus itaque, nesciunt incidunt optio voluptas cum soluta quas non sint vitae. Quasi doloremque praesentium asperiores ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel quia, ex harum accusantium reiciendis voluptatibus assumenda libero dicta ut? </p>
          <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem nobis animi recusandae hic. Minima asperiores animi rem eligendi dolorem esse?</h6>
        </div>
       </div>
       <div className="sub-container2" id="sub-container2">
          <h1>Download Our <a href="#">App</a> </h1>
          <div className="video" id='video'>
              <video autoPlay loop muted src={video}></video>
         </div>
       </div>
    </div>

      <div className="about-news-letter" id="about-news-letter">
          <div className="about-news-letter1" id="about-news-letter1">
            <h2>SignUp For News-Letters</h2>
            <p>
              Get E-mail update of our latest about trends and <br id="br" />
              <strong> Special Offers</strong>
            </p>
          </div>
          <div className="about-news-letter2" id="about-news-letter2">
            <input
              type="text"
              placeholder="example@mail.com"
              autoComplete="off"
            />
            <button
              onClick={addstyle}
              className={`about-custom-button ${clicked ? "hover-effect" : ""}`}
            >
              {" "}
              Sign-Up{" "}
            </button>
          </div>
        </div>
        <div className="about-footer" id="aboutfooter">
          <div className="about-image" id="about-image">
            <img src={logo} alt="Cara" />
            <div className="about-address">
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
            <div className="about-icons" id="about-icons">
              <h3>Follow Us</h3>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} id="about-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} id="about-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} id="about-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} id="about-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} id="about-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTelegram} id="about-icons" />
              </a>
            </div>
          </div>
          <div className="about-about-account" id="about-about-account">
            <div className="about-about" id="about-about">
              <h3>About Us </h3>
              <p>About Us </p>
              <p> Delivery Information</p>
              <p> Privacy Policy</p>
              <p> Terms and Conditions</p>
              <p>Contact Us</p>
            </div>
            <div className="about-account1" id="about-account1">
              <h3> My Account </h3>
              <p>Sign In</p>
              <p>View Cart</p>
              <p>My Wishlist</p>
              <p>Track My Order</p>
              <p>Help</p>
            </div>
          </div>
          <div className="about-install" id="about-install">
            <h3>Install Apss</h3>
            <p>From Play Store | App Store</p>
            <img src={play} alt="" id="about-play" />
            <img src={app} alt="" id="about-app" />
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
          </div>
        </div>  
    </section>
  )
}
