import React from "react";
import "./AboutUs.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import aine from "../assets/images/aine.jpg";
import charles from "../assets/images/charles.jpg";
import { motion } from "framer-motion";
import FooterSection from "../components/FooterSection";
import ChatBot from "../components/ChatBot";
import FloatingSocials from "../components/FloatingSocials";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us">
      {/* Hero Section with parallax effect */}
      <section className="hero-section text-center text-white parallax-bg">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Miles Human Resource LLC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bridging Talent & Opportunity with Excellence
          </motion.p>
        </Container>
      </section>

      {/* Leadership Section with animations */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Meet Our Leadership</h2>
        <Row>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
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
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="leadership-card">
                <Card.Img variant="top" src={charles} alt="Charles Kalisa" style={{ height: "50%", width: "50.5%" }} />
                <Card.Body>
                  <Card.Title>Charles Kalisa</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Director</Card.Subtitle>
                  <Card.Text>
                    A strategic leader driving growth and innovation in human resource consultancy across UAE & East Africa.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
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
          {[
            { year: "2015", text: "Founded with a vision for HR excellence." },
            { year: "2020", text: "Expanded into new markets, enhancing talent acquisition strategies." },
            { year: "2021", text: "Grew our team, delivering premium HR solutions." },
            { year: "2022", text: "Established as a leader in recruitment and consultancy." },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <strong>{item.year}:</strong> {item.text}
            </motion.li>
          ))}
        </ul>
      </Container>

      {/* Call to Action (cleaned up + fixed position + click handler) */}
      <div className="text-center my-5">
        <Button
          variant="primary"
          className="cta-button"
          onClick={() => navigate("/contact-us")}
          style={{ margin: "0 auto", display: "block" }}
        >
          Get in Touch
        </Button>
      </div>

      <FloatingSocials />
      <FooterSection />
      <ChatBot />
    </div>
  );
};

export default AboutUs;
