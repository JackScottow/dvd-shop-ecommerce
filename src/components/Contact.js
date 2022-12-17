import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Css/Contact.css";

const Contact = () => (
  <Container fluid="lg">
    <Row>
      <Col>
        <h1>Contact Us</h1>
        <p>If you have any questions or feedback, please don't hesitate to contact us.</p>
      </Col>
    </Row>
    <Row>
      <Col>
        <Form>
          <Form.Group controlId="formBasicEmail" className="py-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicName" className="py-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicSubject" className="py-2">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage" className="py-2">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" columns="5" placeholder="Enter message" />
          </Form.Group>

          <Button variant="dark" className="py-2">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Contact;
