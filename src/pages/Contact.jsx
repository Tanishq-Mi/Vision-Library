import React from 'react';
import './ContactStyles.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Visit Vision Library</h1>
          <p>We'd love to welcome you to our space</p>
        </div>
      </section>

      {/* Contact Information and Map Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Our Address</h3>
                  <p>कृषि विकास शाखा स्टेट बैंक के ऊपर भगवा</p>
                  <p>चुंगी, प्रतापगढ़।, Uttar Pradesh 230001</p>
                  <p>India</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info-content">
                  <h3>Phone Number</h3>
                  <p>Main: +91 79055 44622</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-content">
                  <h3>Email Address</h3>
                  <p>info@visionlibrary.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h3>Opening Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 12:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="social-links">
                <h3>Connect With Us</h3>
                <div className="social-icons">
                  <a href="#facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#instagram" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#linkedin" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="map-container">
              <div className="map-embed">
                {/* Replace with your actual Google Maps embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3588.7438849810324!2d81.99243447545878!3d25.91078867725854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a97fb582c3895%3A0x3b54edb72b3c3d7b!2sVision%20Library!5e0!3m2!1sen!2sin!4v1742649561870!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Vision Library Location"
                ></iframe>
              </div>
              <div className="map-overlay">
                <div className="map-card">
                  <h3>Visit Us Today</h3>
                  <p>Easy to find in the heart of Bookville</p>
                  <a 
                    href="https://goo.gl/maps/123Reading" 
                    className="directions-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-section">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>What ID do I need to get a library card?</h3>
            <p>You'll need a valid photo ID and proof of address. Students can use their school ID along with proof of enrollment.</p>
          </div>
          <div className="faq-item">
            <h3>How long can I borrow books?</h3>
            <p>Regular books can be borrowed for 3 weeks, while new releases and high-demand items may have a shorter loan period of 2 weeks.</p>
          </div>
          <div className="faq-item">
            <h3>Do you have study rooms available?</h3>
            <p>Yes, we offer private study rooms that can be reserved up to 2 weeks in advance through our website or by calling us.</p>
          </div>
          <div className="faq-item">
            <h3>Is WiFi available at the library?</h3>
            <p>Yes, we provide free high-speed WiFi for all visitors. The network name is "VisionLibrary" and the password is available at the front desk.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
};

export default Contact;