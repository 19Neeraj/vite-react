import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke , faIndianRupeeSign , faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import {remove} from '../Store/cartSlice.js'
export default function Cart() {
  const items = useSelector((state) => state.cart);
  console.log(items);
  const dispatch = useDispatch();
  const handleRemove=(itemId)=>{
    dispatch(remove(itemId));
  }
  return (
    <section className="cart" id="cart">
      <div className="cart-wrapper" id="cart-wrapper">
        {items.map((e) => (
          <div className="cart-Card" id="cart-Card" key={e.id}>
            <img src={e.image} alt="" />
            <div className="cart-card-detalis" id="cart-card-details">
              <h6>{e.name}</h6>
              <h4>{e.cloth}</h4>
              <h5>
                {" "}
                <strong>
                  | <FontAwesomeIcon icon={faIndianRupeeSign} /> {e.price}/-|
                </strong>{" "}
              </h5>              
              <span>
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" /> 
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStar} id="icon" />
                <FontAwesomeIcon icon={faStarHalfStroke} id="icon" />
              </span>
            <button className="remove" id="remove" onClick={()=>handleRemove(e.id)}>
              Remove<FontAwesomeIcon icon={faMinus} />
            </button>
            </div>
          </div>
        ))}        
      </div>
    </section>
  );
}
