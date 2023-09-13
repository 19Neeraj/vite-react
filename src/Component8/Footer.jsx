import React from 'react' 
import logo from '../images/extra/logo.png'
import play from '../images/pay/play.jpg'
import app from '../images/pay/app.jpg'
import pay from '../images/pay/pay.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faInstagram , faXTwitter , faYoutube , faPinterest , faTelegram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router , Link } from 'react-router-dom'


import './Footer.css'
export default function Footer() {
  return (
      <section className="footer" id="footer">
      <div className="image" id="image">
          <img src={logo} alt="Cara" />
          <div className="address">
          <h3> Contact </h3>
            <p><strong>Address : </strong> Gurugram sec-14</p>
            <p><strong>Phone : </strong> +01  | +91 946-64-173-50</p>
            <p><strong>Outlet-Timing (India) : </strong>09:00 - 08:00, Monday - Sunday <strong> Tuesday Off </strong>  </p>
            {/* <p><strong>Outlet-Timing (USA) : </strong>010:00 - 09:00, Monday - Saturday <strong> Sunday Off </strong>  </p> */}
          </div>
          <div className="icons" id="icons">
            <h3>Follow Us</h3>
            <a href="#"><FontAwesomeIcon icon={faFacebook}  id='icons'/></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} id='icons' /></a>
            <a href="#"><FontAwesomeIcon icon={faXTwitter}  id='icons' /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube}  id='icons' /></a>
            <a href="#"><FontAwesomeIcon icon={faPinterest} id='icons' /></a>
            <a href="#"><FontAwesomeIcon icon={faTelegram} id='icons' /></a>
          </div>
      </div>
      <div className="about-account" id="about-account"> 
        <div className="about" id="about">
          <h3>About Us </h3>
          <p>About Us </p> 
          <p> Delivery Information</p>      
          <p>Privacy Policy</p>
          <p> Terms and Conditions</p>
          <p>Contact Us</p>
        </div>
        <div className="account" id="account">
          <h3> My Account </h3>
          <p>Sign In</p>
          <p>View Cart</p>
          <p>My Wishlist</p>
          <p>Track My Order</p>
          <p>Help</p></div>
      </div>
      <div className="install" id="install">
        <h3>Install Apss</h3>
        <p>From Play Store | App Store</p>
        <img src={play} alt=""  id='play'/>
        <img src={app} alt="" id='app' />
        <p>Secured Payment Gateways</p>
        <img src={pay} alt="" />
      </div>
    </section>
  )
}
