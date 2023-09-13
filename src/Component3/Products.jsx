import React from "react";
import "./Products.css";
import img1 from "../images/products/f1.jpg";
import img2 from "../images/products/f2.jpg";
import img3 from "../images/products/f3.jpg";
import img4 from "../images/products/f4.jpg";
import img5 from "../images/products/f5.jpg";
import img6 from "../images/products/f6.jpg";
import img7 from "../images/products/f7.jpg";
import img8 from "../images/products/f8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faIndianRupeeSign,
  faCartArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice.js";
import { Link } from "react-router-dom";
export default function Products() {
  const item1 = {
    id: 1,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img1,
  };
  const item2 = {
    id: 2,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2299,
    image: img2,
  };
  const item3 = {
    id: 3,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img3,
  };
  const item4 = {
    id: 4,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img4,
  };
  const item5 = {
    id: 5,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img5,
  };
  const item6 = {
    id: 6,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts", 
    price: 2199,
    image: img6,
  };
  const item7 = {
    id: 7,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img7,
  };
  const item8 = {
    id: 8,
    name: "lorem ipsum",
    cloth: "Cartoon Astronaut Shirts",
    price: 2199,
    image: img8,
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

  return (
    <section className="products" id="products">
      <h1>Featured Products</h1>
      <p>Trending Summer Collections New Morden Designs</p>
      <div className="container" id="container">
        <div className="items" id="items">
          <Link to={`/ProductDetails/${item1.id}`} state={{item : item1}}>
            <img src={item1.image} alt="" />
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd1(item1)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>
        <div className="items" id="items">
        <Link to={`/ProductDetails/${item2.id}`} state={{item : item2}}>
            <img src={item2.image} alt="" />
          </Link>
          {/* <img src={img2} alt="" /> */}
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
                | <FontAwesomeIcon icon={faIndianRupeeSign} /> 2299/-|
              </strong>{" "}
            </h5>
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd2(item2)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item3.id}`} state={{item : item3}}>
            <img src={item3.image} alt="" />
          </Link>
          {/* <img src={img3} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd3(item3)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item4.id}`} state={{item : item4}}>
            <img src={item4.image} alt="" />
          </Link>
          {/* <img src={img4} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd4(item4)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item5.id}`} state={{item : item5}}>
            <img src={item5.image} alt="" />
          </Link>
          {/* <img src={img5} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd5(item5)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item6.id}`} state={{item : item6}}>
            <img src={item6.image} alt="" />
          </Link>
          {/* <img src={img6} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd6(item6)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item7.id}`} state={{item : item7}}>
            <img src={item7.image} alt="" />
          </Link>
          {/* <img src={img7} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd7(item7)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>

        <div className="items" id="items">
        <Link to={`/ProductDetails/${item8.id}`} state={{item : item8}}>
            <img src={item8.image} alt="" />
          </Link>
          {/* <img src={img8} alt="" /> */}
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
            <button
              className="cart-icon"
              id="cart-icon"
              onClick={() => handleAdd8(item8)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} />
              </strong>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
