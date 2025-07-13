// ContactModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactModal = ({ show, handleClose }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_tmjq4ps',
    'template_o5l98s7',
    form,
    'cNn2xjgDIP62mpfF8'
  ).then((result) => {
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
      handleClose();
    }, (error) => {
      alert('Failed to send: ' + error.text);
    });
};

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Contact Corey Kling</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="contactName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              required 
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="contactMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              name="message" 
              value={form.message} 
              onChange={handleChange} 
              rows={3} 
              required 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Send Message
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ContactModal;