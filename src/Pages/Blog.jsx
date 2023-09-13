import React, {useState} from 'react'
import './Blog.css'
import b1 from '../images/blog/b1.jpg'
import b2 from '../images/blog/b2.jpg'
import b3 from '../images/blog/b3.jpg'
import b4 from '../images/blog/b4.jpg'
import b5 from '../images/blog/b5.jpg'
import b6 from '../images/blog/b6.jpg'
import b7 from '../images/blog/b7.jpg'
import logo from "../images/extra/logo.png";
import play from "../images/pay/play.jpg";
import app from "../images/pay/app.jpg";
import pay from "../images/pay/pay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
export default function Blog() {
  const [clicked, setClicked] = useState(false);
  const addstyle = () => {
    setClicked(true);
  };
  return (
    <section className="blog" id="blog">
    <div className="blog-banner" id="blog-banner">
      <h1>#Read More</h1>
      <h5>
        read all case studies not only about <br /> ours products but also about our services
      </h5>
    </div>

    <div className="blog-read" id="blog-read">
      <div className='sub-blog-read' id='sub-blog-read'>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b1} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1 id='h1'>07|a101 </h1>
                <strong id='strong1'>The Cotton-Jersey Zip-Up Shirt</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b2} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a102 </h1>
                <strong id='strong1'>How to style a Quiff</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b3} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a103 </h1>
                <strong id='strong1'>Must Have Skter Girl Items</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b4} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a104 </h1>
                <strong id='strong1'>The Runaway-Inspired Trands</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b5} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a105 </h1>
                <strong id='strong1'>The Woolen Sweat-shirt</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b6} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a106 </h1>
                <strong id='strong1'>Lorem, ipsum dolor.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         <div className='sub2-blog-read' id='sub2-blog-read'>
            <img src={b7} alt="" />
            <div className="blog-details" id="vlog-details">
            <h1>07|a107 </h1>
                <strong id='strong1'>Sit amet consectetur.</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos iste accusantium consequatur deleniti id, quos tempore nisi delectus animi non debitis dolores, magnam dignissimos quibusdam beatae illo consequuntur. Commodi assumenda libero tempora repudiandae, aut fuga aliquam. Nemo nam quae quam maxime, eveniet excepturi illum dignissimos laudantium molestias veritatis quaerat quia.
              </p>
                <strong id='strong2'>Continue reading__</strong>
            </div>        
         </div>
         

      </div>
    </div>

        <div className="blog-news-letter" id="blog-news-letter">
          <div className="blog-news-letter1" id="blog-news-letter1">
            <h2>SignUp For News-Letters</h2>
            <p>
              Get E-mail update of our latest blog trends and <br id="br" />
              <strong> Special Offers</strong>
            </p>
          </div>
          <div className="blog-news-letter2" id="blog-news-letter2">
            <input
              type="text"
              placeholder="example@mail.com"
              autoComplete="off"
            />
            <button
              onClick={addstyle}
              className={`blog-custom-button ${clicked ? "hover-effect" : ""}`}
            >
              {" "}
              Sign-Up{" "}
            </button>
          </div>
        </div>
        <div className="blog-footer" id="blogfooter">
          <div className="blog-image" id="blog-image">
            <img src={logo} alt="Cara" />
            <div className="blog-address">
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
            <div className="blog-icons" id="blog-icons">
              <h3>Follow Us</h3>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} id="blog-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} id="blog-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} id="blog-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} id="blog-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} id="blog-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTelegram} id="blog-icons" />
              </a>
            </div>
          </div>
          <div className="blog-about-account" id="blog-about-account">
            <div className="blog-about" id="blog-about">
              <h3>About Us </h3>
              <p>About Us </p>
              <p> Delivery Information</p>
              <p> Privacy Policy</p>
              <p> Terms and Conditions</p>
              <p>Contact Us</p>
            </div>
            <div className="blog-account" id="blog-account">
              <h3> My Account </h3>
              <p>Sign In</p>
              <p>View Cart</p>
              <p>My Wishlist</p>
              <p>Track My Order</p>
              <p>Help</p>
            </div>
          </div>
          <div className="blog-install" id="blog-install">
            <h3>Install Apss</h3>
            <p>From Play Store | App Store</p>
            <img src={play} alt="" id="blog-play" />
            <img src={app} alt="" id="blog-app" />
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
          </div>
        </div>         
    </section>
  )
}
