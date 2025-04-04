import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      {submitted && <Alert variant="success">Message sent! We'll get back to you soon.</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name" className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>

        <Form.Group controlId="email" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group controlId="message" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} required />
        </Form.Group>

        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
