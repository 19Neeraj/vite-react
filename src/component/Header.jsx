import React from "react";
import logo from "../images/extra/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faBars,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
export default function Header() {
  const openNav = () => {
    const nav = document.getElementById("nav");
    nav.style.display = "block";
  };

  const closeNav = () => {
    const nav = document.getElementById("nav");
    nav.style.display = "none";
  };

  const items = useSelector((state) => state.cart);

  return (
    <>
      <section className="header" id="header">
        <Link to="/Api">
          <img src={logo} alt="Cara" />
        </Link>
        <div className="nav" id="nav">
          <button className="close" onClick={closeNav}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul id="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Shop">Shop</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Cart">
                <FontAwesomeIcon icon={faCartShopping} />: {items.length}
              </Link>
            </li>
          </ul>
        </div>
        <button className="menu" onClick={openNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </section>
    </>
  );
}
