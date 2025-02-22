import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../Css/Checkout.css";

const Checkout = ({ basket }) => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  let total = basket.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Handle successful checkout
      alert("Order placed successfully!");
      navigate("/");
    }

    setValidated(true);
  };

  document.title = "Checkout";

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>

      <div className="checkout-content">
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {basket.map((item) => (
              <div key={item.id} className="order-item">
                <div className="order-item-details">
                  <span className="order-item-quantity">{item.qty}x</span>
                  <span>{item.title}</span>
                </div>
                <span>£{(item.qty * item.price).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="order-total">
            <span>Total</span>
            <span>£{total.toFixed(2)}</span>
          </div>
        </div>

        <Form noValidate validated={validated} onSubmit={handleSubmit} className="checkout-form">
          <div className="shipping-details">
            <h2>Shipping Details</h2>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control required type="text" placeholder="Enter your full name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control required type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control required type="text" placeholder="Street address" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control type="text" placeholder="Apartment, suite, etc. (optional)" />
            </Form.Group>

            <div className="address-details">
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control required type="text" placeholder="City" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Postcode</Form.Label>
                <Form.Control required type="text" placeholder="Postcode" />
              </Form.Group>
            </div>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control required type="tel" placeholder="Phone number" />
            </Form.Group>
          </div>

          <div className="payment-details">
            <h2>Payment Details</h2>
            <Form.Group className="mb-3">
              <Form.Label>Card Holder Name</Form.Label>
              <Form.Control required type="text" placeholder="Name on card" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Card Number</Form.Label>
              <Form.Control required type="text" placeholder="1234 5678 9012 3456" />
            </Form.Group>

            <div className="card-details">
              <Form.Group className="mb-3">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control required type="text" placeholder="MM/YY" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>CVV</Form.Label>
                <Form.Control required type="text" placeholder="123" />
              </Form.Group>
            </div>
          </div>

          <div className="checkout-actions">
            <Button variant="outline-primary" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faCreditCard} /> Pay £{total.toFixed(2)}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Checkout;
