import React from "react";
import "./App.css";
import Header from "./component/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component1/Home";
import Shop from "./Pages/Shop";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Api from "./Component9/Api";
import Edit from "./Pages/Edit";
import Delete from "./Pages/Delete";
import { Provider } from "react-redux";
import store from "./Store/Store";
import ProductsDetails from "./Pages/ProductsDetails";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Api" element={<Api />} />
            <Route path="/Edit/:Name" element={<Edit />} />
            <Route path="/Delete/:Name" element={<Delete />} />
            <Route path="/ProductDetails/:id" element={< ProductsDetails />}/>
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
