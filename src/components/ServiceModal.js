import React from "react";
import { Modal, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import "./ServiceModal.css";

const ServiceModal = ({ show, onHide, service }) => {
  if (!service) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      backdrop="static"
      className="service-modal"
      dialogClassName="blur-backdrop"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Modal.Header closeButton>
          <Modal.Title>{service.icon} {service.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{service.description}</p>
          <ul>
            <li>Customized strategy for every client</li>
            <li>Dedicated account managers</li>
            <li>Ongoing support and training</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
        </Modal.Footer>
      </motion.div>
    </Modal>
  );
};

export default ServiceModal;
