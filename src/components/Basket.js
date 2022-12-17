import React from "react";
import { Link } from "react-router-dom";
import "../Css/Basket.css";
import { Button } from "react-bootstrap";

const Basket = ({ basket, plusQty, minusQty, clearBasket }) => {
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });

  return (
    <div className="basket-container">
      {basket.length > 0
        ? basket.map((item, i) => (
            <div className="basket-item shadow" key={item.id}>
              <div className="basket-item-product-details">
                <Link to={`/movie/${item.title.split(" ").join("")}`} key={item.id} state={item.id} className="basket-item-link">
                  <img src={`https://www.themoviedb.org/t/p/w92${item.image}`} alt={item.title} />
                  {item.title} ({item.id})
                </Link>
              </div>
              <div className="basket-item-cost">
                Price £{item.price}
                <div className="basket-adjust">
                  <Button variant="danger" onClick={() => minusQty(item)} className="basket-adjust-button">
                    -
                  </Button>
                  <input type="text" value={item.qty} readonly className="qty" />
                  <Button variant="success" onClick={() => plusQty(item)} className="basket-adjust-button">
                    +
                  </Button>
                </div>
                Total Cost: £{(item.qty * item.price).toFixed(2)}
              </div>
            </div>
          ))
        : "Cart is empty"}
      {basket.length > 0 ? (
        <div className="basket-total shadow">
          <Button variant="danger" onClick={() => clearBasket()} className="basket-button">
            Empty Basket
          </Button>
          <Button href="/checkout" variant="success" className="basket-button" basket={basket}>
            Proceed to Checkout
          </Button>
          <p>
            Total : <span className="total-cost">£{(basketQty * 2.99).toFixed(2)}</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basket;
