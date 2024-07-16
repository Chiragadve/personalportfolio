import { useState, useRef, FormEvent } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

interface FormDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

interface Status {
  success?: boolean;
  message?: string;
}

export const Contact = () => {
  const formInitialDetails: FormDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState<Status>({});

  const onFormUpdate = (category: keyof FormDetails, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      setButtonText('Sending...');
      emailjs
        .sendForm('service_lb00j6r', 'template_7yp8ey9', form.current, 'lQWPUUHSWUOJ-YJlW')
        .then(
          () => {
            console.log('SUCCESS!');
            setButtonText('Send');
            setStatus({ success: true, message: 'Message sent successfully!' });
            alert('Message sent successfully!');
            setFormDetails(formInitialDetails); // Reset form details
          },
          error => {
            console.log('FAILED...', error.text);
            setButtonText('Send');
            setStatus({
              success: false,
              message: 'Failed to send message. Please try again later.',
            });
            alert('Failed to send message. Please try again later.');
          }
        );
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? 'animate__animated animate__zoomIn' : ''}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="firstName"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={e => onFormUpdate('firstName', e.target.value)}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="lastName"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={e => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="email"
                          value={formDetails.email}
                          placeholder="Your Email Address"
                          onChange={e => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No (Optional)"
                          onChange={e => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows={6}
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={e => onFormUpdate('message', e.target.value)}
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
