import React from "react";
import { Link } from "react-router-dom";
import "../Css/Basket.css";
import { Button } from "react-bootstrap";
import { faTrash, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Basket = ({ basket, plusQty, minusQty, clearBasket, removeItem }) => {
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
                <img src={`https://www.themoviedb.org/t/p/w92${item.image}`} alt={item.title} />
                <Link to={`/movie/${item.title.split(" ").join("")}`} key={item.id} state={item.id} className="basket-item-link">
                  {item.title} <br />({item.id})
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
                  <Button variant="danger" onClick={() => removeItem(item)} className="basket-adjust-button">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </div>
                Total £{(item.qty * item.price).toFixed(2)}
              </div>
            </div>
          ))
        : "Cart is empty"}
      {basket.length > 0 ? (
        <div className="basket-total shadow">
          <Button variant="danger" onClick={() => clearBasket()} className="basket-button">
            <FontAwesomeIcon icon={faTrash} />
            {` Empty Basket`}
          </Button>
          <Button href="/checkout" variant="success" className="basket-button" basket={basket}>
            {`Checkout `}
            <FontAwesomeIcon icon={faCreditCard} />
          </Button>
          <p>
            Total <span className="total-cost">£{(basketQty * 2.99).toFixed(2)}</span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Basket;
