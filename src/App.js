import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layouts/Main";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Popular from "./components/Popular";
import Genre from "./components/Genre";
import Movie from "./components/Movie";
import Basket from "./components/Basket";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Search from "./components/Search";

function App() {
  const [cart, setCart] = useState(localStorage.getItem("Cart") ? JSON.parse(localStorage.getItem("Cart")) : []);

  const onAdd = (product) => {
    let i = cart.findIndex((e) => e.id === product.id);
    if (i > -1) {
      let tempCart = cart;
      tempCart[i].qty += 1;
      setCart([...tempCart]);
    } else {
      setCart([...cart, { title: product.title, image: product.poster_path, id: product.id, qty: 1, price: 2.99 }]);
    }
  };

  const plusQty = (product) => {
    let i = cart.findIndex((e) => e.id === product.id);
    let tempCart = cart;
    tempCart[i].qty += 1;
    setCart([...tempCart]);
  };

  const minusQty = (product) => {
    let i = cart.findIndex((e) => e.id === product.id);
    if (cart[i].qty === 1) {
      let tempCart = cart.filter((item, x) => x !== i);
      setCart([...tempCart]);
    } else {
      let tempCart = cart;
      tempCart[i].qty -= 1;
      setCart([...tempCart]);
    }
  };

  const removeItem = (product) => {
    let i = cart.findIndex((e) => e.id === product.id);
    let tempCart = cart.filter((item, x) => x !== i);
    setCart([...tempCart]);
  };

  const clearBasket = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout basket={cart} />}>
          <Route index element={<Home onAdd={onAdd} />} />
          <Route path="/basket" element={<Basket basket={cart} plusQty={plusQty} minusQty={minusQty} clearBasket={clearBasket} removeItem={removeItem} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/popular" element={<Popular onAdd={onAdd} />} />
          <Route path="/genre/:genre" element={<Genre onAdd={onAdd} />} />
          <Route path="/movie/:movie" element={<Movie onAdd={onAdd} cart={cart} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsofuse" element={<Terms />} />
          <Route path="/checkout" element={<Checkout basket={cart} />} />
          <Route path="/search/:searchterm" element={<Search />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
