import React, { useState } from 'react';
import './EnquiryStyles.css'; // Import the CSS file

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      // Navbar state for mobile menu
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        
        // Reset form after submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      };
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      return (
        <>
         
    
          {/* Hero Section */}
          <section className="hero">
            <div className="hero-content">
              <h2>Get In Touch</h2>
              <p>Have questions or need more information? Fill out the form below and we'll get back to you soon.</p>
            </div>
          </section>
    
          {/* Contact Form Section */}
          <section className="contact-form">
            <div className="container">
              <h2 className="section-title">Contact Us</h2>
              
              <div className="form-container">
                {submitted ? (
                  <div className="success-message">
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="form-group full-width">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows="6"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="form-submit">
                      <button type="submit" className="submit-btn">Send Message</button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        </>
  );
};

export default Enquiry;