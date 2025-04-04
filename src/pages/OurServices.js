import React from "react";
import ServiceModal from "../components/ServiceModal";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import FooterSection from "../components/FooterSection";
import FloatingSocials from "../components/FloatingSocials";
import ChatBot from "../components/ChatBot";
import "./OurServices.css"; 

const services = [
  {
    title: "Recruitment Solutions",
    description: "End-to-end hiring from job posting to onboarding for all sectors.",
    icon: "🧑‍💼"
  },
  {
    title: "HR Consultancy",
    description: "Tailored strategies for compliance, development, and culture.",
    icon: "📊"
  },
  {
    title: "Workforce Outsourcing",
    description: "We manage your workforce so you can focus on core business.",
    icon: "🛠️"
  },
  {
    title: "Payroll Management",
    description: "Reliable payroll processing with legal & tax compliance.",
    icon: "💰"
  },
  {
    title: "Training & Development",
    description: "Upskill your staff with expert-led sessions and workshops.",
    icon: "🎓"
  }
];

const Services = () => {

    const [modalShow, setModalShow] = React.useState(false);
    const [selectedService, setSelectedService] = React.useState(null);

    const handleCardClick = (service) => {
    setSelectedService(service);
    setModalShow(true);
    };




  return (
    <div className="services-page">
      <section className="hero-section text-center text-white parallax-bg">
        <Container>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Premium Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Empowering organizations through world-class HR solutions.
          </motion.p>
        </Container>
      </section>

      <Container className="my-5">
      <motion.p
      className="text-center text-muted mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
  💡 Click on a service card to learn more about what we offer.
    </motion.p>


        <Row>
          {services.map((service, index) => (
            
            <Col md={4} key={index} className="mb-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card onClick={() => handleCardClick(service)} className="service-card h-100 shadow-sm">
                  <Card.Body className="text-center">
                    <div className="service-icon" style={{ fontSize: "2rem" }}>{service.icon}</div>
                    <Card.Title className="mt-3">
                        {service.title}
                        <span className="ms-2" title="Click to learn more">ℹ️</span>
                    </Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>

      <FloatingSocials />
      <FooterSection />
      <ChatBot />
      <ServiceModal
  show={modalShow}
  onHide={() => setModalShow(false)}
  service={selectedService}
      />

    </div>
  );
};

export default Services;
