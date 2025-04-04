import React from "react";
import "./AboutUs.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import aine from "../assets/images/aine.jpg"

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <Container>
          <h1>About Miles Human Resource LLC</h1>
          <p>Bridging Talent & Opportunity with Excellence</p>
        </Container>
      </section>
      
      {/* Leadership Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Leadership</h2>
        <Row>
          <Col md={6}>
            <Card className="leadership-card">
              <Card.Img variant="top" src={aine} alt="Mellon Ainemukama" />
              <Card.Body>
                <Card.Title>Mellon Ainemukama</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">HR Director</Card.Subtitle>
                <Card.Text>
                  Mellon oversees all aspects of talent acquisition and workplace culture. Passionate about diversity and inclusion.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="leadership-card">
              <Card.Img variant="top" src="../assets/images/charles.jpg" alt="Charles Kalisa" />
              <Card.Body>
                <Card.Title>Charles Kalisa</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Director</Card.Subtitle>
                <Card.Text>
                  A strategic leader driving growth and innovation in human resource consultancy across UAE & East Africa.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* Vision & Mission */}
      <section className="vision-mission-section text-center py-5">
        <Container>
          <h2>Our Vision & Mission</h2>
          <p>"Always look, build today to achieve tomorrow."</p>
        </Container>
      </section>

      {/* Company Timeline */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Our Journey</h2>
        <ul className="timeline">
          <li><strong>2015:</strong> Founded with a vision for HR excellence.</li>
          <li><strong>2020:</strong> Expanded into new markets, enhancing talent acquisition strategies.</li>
          <li><strong>2021:</strong> Grew our team, delivering premium HR solutions.</li>
          <li><strong>2022:</strong> Established as a leader in recruitment and consultancy.</li>
        </ul>
      </Container>
      
      {/* Call to Action */}
      <section className="cta-section text-center py-5">
        <Container>
          <h2>Join Us in Building the Future</h2>
          <Button variant="primary" className="cta-button">Get in Touch</Button>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
