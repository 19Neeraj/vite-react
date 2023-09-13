import React from "react";
import "./ProductsDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
  faIndianRupeeSign,
  faCartArrowDown, 
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useParams } from "react-router-dom";
export default function ProductsDetails() {
  const location = useLocation();
  const { id } = useParams;
  // Acces the item data from th elocation state
  const item = location.state.item;
  // console.log(item);
  // const dispatch = useDispatch();
  // const handleAdd = (item)=>{
  //   dispatch(addProduct(item));
  // }

  return (
    <section className="productdetails" id="productdetails">
        <div className="product-details-items" id="product-details-items" key={item.id}>
          <img src={item.image} alt="" />
          <div className="product-details-details" id="details">
            <h6 id="product-details-h6">{item.name}</h6>
            <h4 id="product-details-h5">{item.cloth}</h4>
            <h5>
              {" "}
              <strong>
                <FontAwesomeIcon icon={faIndianRupeeSign} /> {item.price}/-
              </strong>{" "}
            </h5>
            <span>
              <FontAwesomeIcon icon={faStar} id="product-details-icon" />
              <FontAwesomeIcon icon={faStar} id="product-details-icon" />
              <FontAwesomeIcon icon={faStar} id="product-details-icon" />
              <FontAwesomeIcon icon={faStar} id="product-details-icon" />
              <FontAwesomeIcon icon={faStarHalfStroke} id="product-details-icon" />
            </span>
            {/* <button
              className="product-details-cart-icon"
              id="product-details-cart-icon"
              onClick={() => handleAdd(item.id)}
            >
              <strong>
                <FontAwesomeIcon icon={faCartArrowDown} /> Add To Cart
              </strong>
            </button> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta culpa cum velit commodi maxime. Vitae distinctio quos, quod, eos, aperiam placeat ullam numquam nemo similique iste ad? Vel, assumenda impedit obcaecati natus ipsa voluptatem nemo sed unde ullam, omnis corporis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, quae.</p>
          </div>
        </div>
    </section>
  );
}
