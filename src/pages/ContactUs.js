import React, { useEffect, useRef, useState } from "react";
import { Container, Form, Button, Toast } from "react-bootstrap";
import { motion } from "framer-motion";
import FooterSection from "../components/FooterSection";
import FloatingSocials from "../components/FloatingSocials";
import ChatBot from "../components/ChatBot";
import ReCAPTCHA from "react-google-recaptcha";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./ContactUs.css";

const ContactUs = () => {
  const nameRef = useRef(null);
  const [showToast, setShowToast] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    nameRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert("Please verify you are not a robot.");
      return;
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const handleCaptcha = () => setCaptchaVerified(true);

  return (
    <div className="contact-wrapper">
      <div className="contact-page parallax-bg text-white">
        <Container className="py-5">
          <motion.h1
            className="text-center mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get in Touch ✨
          </motion.h1>

          <motion.div
            className="glass-card p-4 mx-auto"
            style={{ maxWidth: "600px" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Form onSubmit={handleSubmit} id="contactForm">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" required ref={nameRef} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." required />
              </Form.Group>

              <div className="text-center mb-3">
                <ReCAPTCHA
                  sitekey="6LekjgorAAAAAJOUBYSTUKHvDbJ9xEexHdYFTAph"
                  onChange={handleCaptcha}
                />
              </div>

              <div className="text-center">
                <Button variant="light" type="submit" className="px-5">
                  Send Message 🚀
                </Button>
              </div>
            </Form>

            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              bg="success"
              className="position-fixed bottom-0 end-0 m-3"
              delay={4000}
              autohide
            >
              <Toast.Header>
                <strong className="me-auto">Message Sent</strong>
              </Toast.Header>
              <Toast.Body className="text-white">
                Thank you! We'll be in touch shortly.
              </Toast.Body>
            </Toast>
          </motion.div>

          <motion.div
            className="text-center mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h5>📍 Our Office Location</h5>
            <p className="text-light mb-3">Abu Dhabi, UAE — Always open for a chat ☕</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d116185.21812868713!2d54.374213!3d24.492799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6710c23115f7%3A0x24ab3e9c40d391d1!2sMiles%20Human%20Resource%20Consultancy!5e0!3m2!1sen!2sae!4v1743805736242!5m2!1sen!2sae" 
            width="600" 
            height="450" 
            style={{border: "0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="mt-4 text-light">
              <p><FaPhoneAlt className="me-2" /> <a href="tel:+971123456789" className="text-white">+971 507932066</a></p>
              <p><FaEnvelope className="me-2" /> <a href="mailto:info@mileshr.ae" className="text-white">info@mileshr.ae</a></p>
              <div className="d-flex justify-content-center gap-3 mt-3">
                <a href="#" className="text-white"><FaFacebookF /></a>
                <a href="#" className="text-white"><FaLinkedinIn /></a>
                <a href="#" className="text-white"><FaInstagram /></a>
              </div>
            </div>
          </motion.div>
        </Container>

        <FloatingSocials />
        <ChatBot />
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactUs;
