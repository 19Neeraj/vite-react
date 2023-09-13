import React from "react";
import img9 from "../images/products/n1.jpg";
import img10 from "../images/products/n2.jpg";
import img11 from "../images/products/n3.jpg";
import img12 from "../images/products/n4.jpg";
import img13 from "../images/products/n5.jpg";
import img14 from "../images/products/n6.jpg";
import img15 from "../images/products/n7.jpg";
import img16 from "../images/products/n8.jpg";
import "./NewArrivals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faIndianRupeeSign,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
import { Link } from "react-router-dom";
export default function NewArrivals() {
  const item9 = {
    id: 9,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img9,
  };
  const item10 = {
    id: 10,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2299,
    image: img10,
  };
  const item11 = {
    id: 11,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img11,
  };
  const item12 = {
    id: 12,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img12,
  };
  const item13 = {
    id: 13,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img13,
  };
  const item14 = {
    id: 14,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img14,
  };
  const item15 = {
    id: 15,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img15,
  };
  const item16 = {
    id: 16,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img16,
  };
  const dispatch = useDispatch();
  const handleAdd9=(item9) =>{
    dispatch(add(item9));
  }
  const handleAdd10=(item10) =>{
    dispatch(add(item10));
  }
  const handleAdd11=(item11) =>{
    dispatch(add(item11));
  }
  const handleAdd12=(item12) =>{
    dispatch(add(item12));
  }
  const handleAdd13=(item13) =>{
    dispatch(add(item13));
  }
  const handleAdd14=(item14) =>{
    dispatch(add(item14));
  }
  const handleAdd15=(item15) =>{
    dispatch(add(item15));
  }
  const handleAdd16=(item16) =>{
    dispatch(add(item16));
  }
  return (
    <section className="new-arrivals" id="new-arrivals">
      <h1>New Arrivals</h1>
      <p>New Summer Collections New Morden Designs</p> 
      <div className="container1" id="conatiner1">
        <div className="items" id="items">
        <Link to={`/ProductDetails/${item9.id}`} state={{item : item9}}>
            <img src={item9.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd9(item9)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item10.id}`} state={{item : item10}}>
            <img src={item10.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
            className="new-cart-icon"
            id="new-cart-icon"
            onClick={() => handleAdd10(item10)}
          >
            <strong>
              <FontAwesomeIcon icon={faCartArrowDown} />
            </strong>
          </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item11.id}`} state={{item : item11}}>
            <img src={item11.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd11(item11)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item12.id}`} state={{item : item12}}>
            <img src={item12.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd12(item12)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item13.id}`} state={{item : item13}}>
            <img src={item13.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd13(item13)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item14.id}`} state={{item : item14}}>
            <img src={item14.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd14(item14)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item15.id}`} state={{item : item15}}>
            <img src={item15.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd15(item15)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item16.id}`} state={{item : item16}}>
            <img src={item16.image} alt="" />
          </Link>
          <div className="details" id="details">
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
          </div>
          <button
              className="new-cart-icon"
              id="new-cart-icon"
              onClick={() => handleAdd16(item16)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
        </div>
      </div>
    </section>
  );
}
