import { React } from "react";
import { Link } from "react-router-dom";
import "../Css/Basket.css";
import { Button } from "react-bootstrap";
import { faTrashCan, faCreditCard, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoImage from "../Images/NoImageSmall.jpg";

const Basket = ({ basket, plusQty, minusQty, clearBasket, removeItem }) => {
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });

  document.title = "Basket";

  if (basket.length === 0) {
    return (
      <div className="basket-container">
        <div className="empty-cart-message">Your shopping cart is empty</div>
      </div>
    );
  }

  return (
    <div className="basket-container">
      {basket.map((item) => (
        <div className="basket-item shadow-sm" key={item.id}>
          <div className="basket-item-product-details">
            <img src={item.image ? `https://www.themoviedb.org/t/p/w92${item.image}` : NoImage} alt={item.title} />
            <Link to={`/movie/${item.title.split(" ").join("")}`} state={item.id} className="basket-item-link">
              {item.title}
            </Link>
          </div>

          <div className="basket-item-cost">
            <div>Unit Price: £{item.price.toFixed(2)}</div>
            <div className="basket-adjust">
              <Button variant="outline-danger" onClick={() => minusQty(item)} className="basket-adjust-button">
                <FontAwesomeIcon icon={faMinus} />
              </Button>
              <input type="text" value={item.qty} readOnly className="qty" />
              <Button variant="outline-success" onClick={() => plusQty(item)} className="basket-adjust-button">
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </div>
            <div>Total: £{(item.qty * item.price).toFixed(2)}</div>
            <Button variant="outline-danger" onClick={() => removeItem(item)} className="basket-adjust-button">
              <FontAwesomeIcon icon={faTrashCan} />
            </Button>
          </div>
        </div>
      ))}

      <div className="basket-total shadow-sm">
        <Button variant="outline-danger" onClick={clearBasket} className="basket-button">
          <FontAwesomeIcon icon={faTrashCan} />
          Empty Basket
        </Button>
        <Button as={Link} to="/checkout" variant="success" className="basket-button">
          <FontAwesomeIcon icon={faCreditCard} />
          Checkout
        </Button>
        <div>
          Total: <span className="total-cost">£{(basketQty * 2.99).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Basket;
