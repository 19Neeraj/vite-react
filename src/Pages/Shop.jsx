import React, { useState } from "react";
import "./Shop.css";
import img1 from "../images/products/f1.jpg";
import img2 from "../images/products/f2.jpg";
import img3 from "../images/products/f3.jpg";
import img4 from "../images/products/f4.jpg";
import img5 from "../images/products/f5.jpg";
import img6 from "../images/products/f6.jpg";
import img7 from "../images/products/f7.jpg";
import img8 from "../images/products/f8.jpg";
import img9 from "../images/products/n1.jpg";
import img10 from "../images/products/n2.jpg";
import img11 from "../images/products/n3.jpg";
import img12 from "../images/products/n4.jpg";
import img13 from "../images/products/n5.jpg";
import img14 from "../images/products/n6.jpg";
import img15 from "../images/products/n7.jpg";
import img16 from "../images/products/n8.jpg";
import logo from "../images/extra/logo.png";
import play from "../images/pay/play.jpg";
import app from "../images/pay/app.jpg";
import pay from "../images/pay/pay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faIndianRupeeSign,
  faCartArrowDown,
  faAngleLeft,
  faAnglesLeft,
  faAngleRight,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faPinterest,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { add } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
export default function Shop() {
  const [clicked, setClicked] = useState(false);
  const addstyle = () => {
    setClicked(true);
  };
  const item1 = {
    id: 17,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img1,
  };
  const item2 = {
    id: 18,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2299,
    image: img2,
  };
  const item3 = {
    id: 19,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img3,
  };
  const item4 = {
    id: 20,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img4,
  };
  const item5 = {
    id: 21,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img5,
  };
  const item6 = {
    id: 22,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img6,
  };
  const item7 = {
    id: 23,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img7,
  };
  const item8 = {
    id: 24,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img8,
  };
  const item9 = {
    id: 25,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img9,
  };
  const item10 = {
    id: 26,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2299,
    image: img10,
  };
  const item11 = {
    id: 27,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img11,
  };
  const item12 = {
    id: 28,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img12,
  };
  const item13 = {
    id: 29,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img13,
  };
  const item14 = {
    id: 30,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img14,
  };
  const item15 = {
    id: 31,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img15,
  };
  const item16 = {
    id: 32,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img16,
  };
 const dispatch = useDispatch();
  const handleAdd1 = (item1) => {
    dispatch(add(item1));
  };
  const handleAdd2 = (item2) => {
    dispatch(add(item2));
  };
  const handleAdd3 = (item3) => {
    dispatch(add(item3));
  };
  const handleAdd4 = (item4) => {
    dispatch(add(item4));
  };
  const handleAdd5 = (item5) => {
    dispatch(add(item5));
  };
  const handleAdd6 = (item6) => {
    dispatch(add(item6));
  };
  const handleAdd7 = (item7) => {
    dispatch(add(item7));
  };
  const handleAdd8 = (item8) => {
    dispatch(add(item8));
  };
  const handleAdd9 = (item9) => {
    dispatch(add(item9));
  };
  const handleAdd10 = (item10) => {
    dispatch(add(item10));
  };
  const handleAdd11 = (item11) => {
    dispatch(add(item11));
  };
  const handleAdd12 = (item12) => {
    dispatch(add(item12));
  };
  const handleAdd13 = (item13) => {
    dispatch(add(item13));
  };
  const handleAdd14 = (item14) => {
    dispatch(add(item14));
  };
  const handleAdd15 = (item15) => {
    dispatch(add(item15));
  };
  const handleAdd16 = (item16) => {
    dispatch(add(item16));
  };
  return (
    <>
      <section className="shop" id="shop">
        <div className="shop-banner" id="shop-banner">
          <h1>#Stay Home </h1>
          <h5>
            Save more with Coupons & <strong>Up to 30% Off</strong>
          </h5>
        </div>
        <div className="shop-container" id="shop-container">
          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item1.id}`} state={{item : item1}}>
            <img src={item1.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd1(item1)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>
          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item2.id}`} state={{item : item2}}>
            <img src={item2.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" /> 
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd2(item2)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item3.id}`} state={{item : item3}}>
            <img src={item3.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd3(item3)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item4.id}`} state={{item : item4}}>
            <img src={item4.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd4(item4)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item5.id}`} state={{item : item5}}>
            <img src={item5.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd5(item5)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item6.id}`} state={{item : item6}}>
            <img src={item6.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd6(item6)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item7.id}`} state={{item : item7}}>
            <img src={item7.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd7(item7)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item8.id}`} state={{item : item8}}>
            <img src={item8.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd8(item8)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item9.id}`} state={{item : item9}}>
            <img src={item9.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd9(item9)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item10.id}`} state={{item : item10}}>
            <img src={item10.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd10(item10)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item11.id}`} state={{item : item11}}>
            <img src={item11.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd11(item11)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item12.id}`} state={{item : item12}}>
            <img src={item12.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd12(item12)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item13.id}`} state={{item : item13}}>
            <img src={item13.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd13(item13)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item14.id}`} state={{item : item14}}>
            <img src={item14.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd14(item14)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item15.id}`} state={{item : item15}}>
            <img src={item15.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon" 
              onClick={() => handleAdd15(item15)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>

          <div className="shop-items" id="shop-items">
          <Link to={`/ProductDetails/${item16.id}`} state={{item : item16}}>
            <img src={item16.image} alt="" />
          </Link>
            <div className="shop-details" id="shop-details">
              <h6>Lorem, ipsum</h6>
              <h4>Cartoon Astronaut Shirts</h4>
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2199/-|
                </strong>{" "}
              </h5>
              <button className="shop-cart-icon" id="shop-cart-icon"
              onClick={() => handleAdd16(item16)}>
                <strong>
                  <FontAwesomeIcon icon={faCartArrowDown} />
                </strong>
              </button>
            </div>
          </div>
        </div>
        <div className="forward-backward" id="forward-backward">
          <FontAwesomeIcon icon={faAnglesLeft} id="forward-backward-icons" />
          <FontAwesomeIcon icon={faAngleLeft} id="forward-backward-icons" />
          <FontAwesomeIcon icon={faAngleRight} id="forward-backward-icons" />
          <FontAwesomeIcon icon={faAnglesRight} id="forward-backward-icons" />
        </div>
        <div className="shop-news-letter" id="shop-news-letter">
          <div className="shop-news-letter1" id="shop-news-letter1">
            <h2>SignUp For News-Letters</h2>
            <p>
              Get E-mail update of our latest shop trends and <br id="br" />
              <strong> Special Offers</strong>
            </p>
          </div>
          <div className="shop-news-letter2" id="shop-news-letter2">
            <input
              type="text"
              placeholder="example@mail.com"
              autoComplete="off"
            />
            <button
              onClick={addstyle}
              className={`shop-custom-button ${clicked ? "hover-effect" : ""}`}
            >
              {" "}
              Sign-Up{" "}
            </button>
          </div>
        </div>
        <div className="shop-footer" id="shopfooter">
          <div className="shop-image" id="shop-image">
            <img src={logo} alt="Cara" />
            <div className="shop-address">
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
            <div className="shop-icons" id="shop-icons">
              <h3>Follow Us</h3>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} id="shop-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} id="shop-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} id="shop-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} id="shop-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faPinterest} id="shop-icons" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTelegram} id="shop-icons" />
              </a>
            </div>
          </div>
          <div className="shop-about-account" id="shop-about-account">
            <div className="shop-about" id="shop-about">
              <h3>About Us </h3>
              <p>About Us </p>
              <p> Delivery Information</p>
              <p> Privacy Policy</p>
              <p> Terms and Conditions</p>
              <p>Contact Us</p>
            </div>
            <div className="shop-account" id="shop-account">
              <h3> My Account </h3>
              <p>Sign In</p>
              <p>View Cart</p>
              <p>My Wishlist</p>
              <p>Track My Order</p>
              <p>Help</p>
            </div>
          </div>
          <div className="shop-install" id="shop-install">
            <h3>Install Apss</h3>
            <p>From Play Store | App Store</p>
            <img src={play} alt="" id="shop-play" />
            <img src={app} alt="" id="shop-app" />
            <p>Secured Payment Gateways</p>
            <img src={pay} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
