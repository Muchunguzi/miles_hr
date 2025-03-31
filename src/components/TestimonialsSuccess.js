import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./TestimonialsSuccess.css";
import johnDoe from "../assets/images/JohnDoe.JPG";
import michael from "../assets/images/michaelJohnson.jpeg";
import stephen from "../assets/images/stephenLee.jpeg";
import emma from "../assets/images/emmanuelWilliams.JPG";

const testimonials = [
  {
    name: "John Doe",
    role: "Software Engineer",
    company: "Tech Innovators Ltd.",
    testimonial: "Thanks to this amazing HR platform, I landed my dream job in just two weeks!",
    image: johnDoe
  },
  {
    name: "Michael Johnson",
    role: "HR Manager",
    company: "Global Corp",
    testimonial: "We found the best talent quickly and efficiently. A game-changer for our recruitment process!",
    image: michael
  },
  {
    name: "Stephen Lee",
    role: "Marketing Specialist",
    company: "Brand Masters",
    testimonial: "This platform helped me connect with top employers seamlessly. Highly recommended!",
    image: stephen
  },
  {
    name: "Emmanuel Williams",
    role: "Recruitment Officer",
    company: "Elite Hiring Solutions",
    testimonial: "Hiring skilled professionals has never been easier. This service is outstanding!",
    image: emma
  }
];

const TestimonialsSuccess = () => {
  return (
    <Container className="testimonials-section">
      <h2 className="section-title">Testimonials & Success Stories</h2>
      <Row>
        {testimonials.map((item, index) => (
          <Col md={6} lg={3} key={index} className="testimonial-card">
            <Card className="shadow-sm">
              <Card.Body>
                <div className="testimonial-img">
                  <img src={item.image} alt={item.name} />
                </div>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.role} @ {item.company}</Card.Subtitle>
                <Card.Text>"{item.testimonial}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestimonialsSuccess;