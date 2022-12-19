import React from "react";
import { Form, Button, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useState } from "react";
import "../Css/Checkout.css";
const Checkout = ({ basket }) => {
  const [sameAddress, setSameAddress] = useState(true);
  const isSameAddress = () => {
    setSameAddress(!sameAddress);
  };
  let basketQty = 0;
  basket.forEach((item) => {
    basketQty += item.qty;
  });
  return (
    <div className="checkout-container shadow-sm">
      <Form>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formPaymentInfo">
            <Form.Label>Payment Info</Form.Label>
            <Form.Control placeholder="Full Name" className="mb-1" />
            <Form.Control placeholder="Card Number" className="mb-3" />
            <Row>
              <Col>
                <Form.Label>Expiry</Form.Label>
              </Col>
              <Col></Col>
              <Col>
                <Form.Label>Security</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Control placeholder="MM" className="mb-1" />
              </Col>
              <Col>
                <Form.Control placeholder="YYYY" className="mb-1" />
              </Col>
              <Col>
                <Form.Control placeholder="X X X" className="mb-1" />
              </Col>
            </Row>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Billing Address</Form.Label>
            <Form.Control placeholder="Address Line 1" className="mb-1" />
            <Form.Control placeholder="Address Line 2 (Optional)" className="mb-1" />
            <Form.Control placeholder="Town / City" className="mb-1" />
            <Form.Select defaultValue="County" className="mb-1">
              <option hidden>County</option>
              <option>Avon</option>
              <option>Berkshire</option>
              <option>Bedfordshire</option>
              <option>Buckinghamshire</option>
              <option>Cambridgeshire</option>
              <option>Cheshire</option>
              <option>Cornwall</option>
              <option>Cumbria</option>
              <option>Derbyshire</option>
              <option>Devon</option>
              <option>Dorset</option>
              <option>Durham</option>
              <option>Essex</option>
              <option>Gloucestershire</option>
              <option>Greater London</option>
              <option>Hampshire</option>
              <option>Herefordshire</option>
              <option>Hertfordshire</option>
              <option>Isle of Wight</option>
              <option>Kent</option>
              <option>Lancashire</option>
              <option>Leicestershire</option>
              <option>Lincolnshire</option>
              <option>Merseyside</option>
              <option>Norfolk</option>
              <option>Northamptonshire</option>
              <option>Northumberland</option>
              <option>Nottinghamshire</option>
              <option>Oxfordshire</option>
              <option>Rutland</option>
              <option>Schools</option>
              <option>Shropshire</option>
              <option>Somerset</option>
              <option>Staffordshire</option>
              <option>Suffolk</option>
              <option>Surrey</option>
              <option>Sussex</option>
              <option>Tyne and Wear</option>
              <option>Warwickshire</option>
              <option>West Midlands</option>
              <option>Wiltshire</option>
              <option>Worcestershire</option>
              <option>Yorkshire</option>
            </Form.Select>
            <Form.Control placeholder="Post Code" className="mb-1" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Shipping Address</Form.Label>
            <Form.Check
              type="checkbox"
              id="default checkbox"
              label="Same as billing address"
              className="mb-1"
              onChange={() => {
                isSameAddress();
              }}
            />
            {sameAddress ? (
              <>
                <Form.Control placeholder="Name" className="mb-1" />
                <Form.Control placeholder="Address Line 1" className="mb-1" />
                <Form.Control placeholder="Address Line 2 (Optional)" className="mb-1" />
                <Form.Control placeholder="Town / City" className="mb-1" />
                <Form.Select defaultValue="County" className="mb-1">
                  <option hidden>County</option>
                  <option>Avon</option>
                  <option>Berkshire</option>
                  <option>Bedfordshire</option>
                  <option>Buckinghamshire</option>
                  <option>Cambridgeshire</option>
                  <option>Cheshire</option>
                  <option>Cornwall</option>
                  <option>Cumbria</option>
                  <option>Derbyshire</option>
                  <option>Devon</option>
                  <option>Dorset</option>
                  <option>Durham</option>
                  <option>Essex</option>
                  <option>Gloucestershire</option>
                  <option>Greater London</option>
                  <option>Hampshire</option>
                  <option>Herefordshire</option>
                  <option>Hertfordshire</option>
                  <option>Isle of Wight</option>
                  <option>Kent</option>
                  <option>Lancashire</option>
                  <option>Leicestershire</option>
                  <option>Lincolnshire</option>
                  <option>Merseyside</option>
                  <option>Norfolk</option>
                  <option>Northamptonshire</option>
                  <option>Northumberland</option>
                  <option>Nottinghamshire</option>
                  <option>Oxfordshire</option>
                  <option>Rutland</option>
                  <option>Schools</option>
                  <option>Shropshire</option>
                  <option>Somerset</option>
                  <option>Staffordshire</option>
                  <option>Suffolk</option>
                  <option>Surrey</option>
                  <option>Sussex</option>
                  <option>Tyne and Wear</option>
                  <option>Warwickshire</option>
                  <option>West Midlands</option>
                  <option>Wiltshire</option>
                  <option>Worcestershire</option>
                  <option>Yorkshire</option>
                </Form.Select>
                <Form.Control placeholder="Post Code" className="mb-1" />{" "}
              </>
            ) : (
              ""
            )}
          </Form.Group>
        </Row>
      </Form>
      <Card className="checkout-summary-card shadow-sm">
        <Card.Header className="text-center">
          <Card.Title className="my-auto">Summary</Card.Title>
        </Card.Header>
        <Card.Title className="mx-3">
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <div> Products: </div>
              <div>£{(basketQty * 2.99).toFixed(2)}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>Shipping:</div> <div>Free</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>Total:</div> <div>£{(basketQty * 2.99).toFixed(2)}</div>
            </ListGroup.Item>
          </ListGroup>
          <div className="text-center">
            <Button variant="primary">Complete Order!</Button>
          </div>
        </Card.Title>
      </Card>
    </div>
  );
};

export default Checkout;
