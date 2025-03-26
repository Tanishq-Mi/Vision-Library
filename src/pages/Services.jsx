
import './ServicesStyles.css'
import React, { useState } from 'react';
const Services = () => {
// State for mobile menu toggle
const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

return (
  <>
  
    {/* Hero Section */}
    <section className="hero">
      <div className="hero-content">
        <h2>Our Library Services</h2>
        <p>Discover all the resources and facilities we offer to our community</p>
        <a href="#services-overview" className="hero-btn">Explore Services</a>
      </div>
    </section>

    {/* Services Overview */}
    <section id="services-overview" className="services-overview">
      <div className="container">
        <h2 className="section-title">What We Offer</h2>
        
        <div className="services-grid">
          {/* Service 1 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="book-icon"></i>
            </div>
            <h3>Book Lending</h3>
            <p>Access to our collection of books spanning various genres and topics, with both physical and digital options available.</p>
            <a href="#book-lending" className="service-link">Learn More</a>
          </div>

          {/* Service 2 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="computer-icon"></i>
            </div>
            <h3>Computer & Internet</h3>
            <p>Free computer and high-speed internet access for research, work, or recreational purposes with printing facilities.</p>
            <a href="#technology" className="service-link">Learn More</a>
          </div>

          {/* Service 3 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="study-icon"></i>
            </div>
            <h3>Study Spaces</h3>
            <p>Quiet and collaborative study areas designed for individual focus or group work with comfortable seating options.</p>
            <a href="#study-spaces" className="service-link">Learn More</a>
          </div>

          {/* Service 4 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="event-icon"></i>
            </div>
            <h3>Events & Programs</h3>
            <p>We celebrate every festivals and we respect every festival.</p>
            <a href="#events" className="service-link">Learn More</a>
          </div>

          {/* Service 5 */}
          <div className="service-card">
            <div className="service-icon">
              <i className="children-icon"></i>
            </div>
            <h3>Children's Section</h3>
            <p>Dedicated area for young readers with age-appropriate materials, interactive learning tools, and regular storytelling sessions.</p>
            <a href="#children" className="service-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>

    {/* Detailed Services Sections */}
    <section id="book-lending" className="service-detail">
      <div className="container">
        <div className="service-detail-content">
          <div className="service-detail-text">
            <h2>Book Lending Services</h2>
            <p>We Have books for various Branches Like We Have books for CIVIL sudies, We Have books for RailWays and many More.</p>
            <ul className="service-features">
              <li>Books  for all ages</li>
              <li>Reference materials for academic research</li>
              <li>NewsPaper available for curraint affairs.</li>
            </ul>
            <a href="/contact" className="cta-btn">Visit Vision Library</a>
          </div>
          <div className="service-detail-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="technology" className="service-detail alt-bg">
      <div className="container">
        <div className="service-detail-content reverse">
          <div className="service-detail-image">
            <div className="image-placeholder"></div>
          </div>
          <div className="service-detail-text">
            <h2>Technology Resources</h2>
            <p>Stay connected with our state-of-the-art technology center featuring workstations, high-speed internet, and various digital tools to support your learning, work, or creative projects.</p>
            <ul className="service-features">
              <li>20 public computers with productivity software</li>
              <li>Free Wi-Fi throughout the building</li>
              <li>Printing, scanning, and photocopying services</li>
              <li>Technology assistance from our knowledgeable staff</li>
              <li>Digital media lab with creative software</li>
            </ul>
            <a href="#services-overview" className="cta-btn">Back to Services</a>
          </div>
        </div>
      </div>
    </section>

    <section id="study-spaces" className="service-detail">
      <div className="container">
        <div className="service-detail-content">
          <div className="service-detail-text">
            <h2>Study & Collaboration Spaces</h2>
            <p>Find your perfect spot to focus, collaborate, or relax at our library. We offer a variety of spaces designed to accommodate different needs and preferences.</p>
            <ul className="service-features">
              <li>Quiet reading room for uninterrupted focus</li>
              <li>Group study rooms with whiteboards (reservation required)</li>
              <li>Casual seating areas throughout the library</li>
              <li>Outdoor reading garden (seasonal)</li>
              <li>Private carrels for individual study</li>
            </ul>
            <a href="#services-overview" className="cta-btn">Back to Services</a>
          </div>
          <div className="service-detail-image">
            <div className="image-placeholder"></div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className="cta">
      <div className="container">
        <h3>Ready to Visit Our Library?</h3>
        <p>Discover all our services in person and let our staff help you find exactly what you need.</p>
        <a href="/contact" className="cta-btn">Contact Us Today</a>
      </div>
    </section>
  </>
);
};


export default Services
