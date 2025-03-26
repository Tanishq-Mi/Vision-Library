import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Welcome To Vision Library</h2>
          <p>Your Gateway to Success</p>
          <a href="#about" className="hero-btn">Discover More</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Our Library</h2>
          <p>We offer a vast collection of books and a peaceful reading environment. Vision Library is designed to inspire learning and creativity, providing resources for students, professionals, and book lovers alike.</p>
          <p>Our mission is to create a space where knowledge is accessible to everyone, fostering intellectual growth and community engagement.</p>
        </div>
      </section>

      {/* Photos Section */}
      <section className="photos">
        <div className="container">
          <h2 className="section-title">Photos Of Our Library</h2>
          <div className="photo-grid">
            <div className="photo-item">
              <img src="src/images/Library1.jpg" alt="Library Interior" />
            </div>
            <div className="photo-item">
              <video src="src/images/Library1.mp4" controls></video>
            </div>
            <div className="photo-item">
              <img src="src/images/Library3.jpg" alt="Library Reading Area" />
            </div>
          </div>
        </div>
      </section>

      {/* About Owner Section */}
      <section className="about-owner">
        <div className="container">
          <h2 className="section-title">About the Owner</h2>
          <p>Meet Pradyuman, the visionary behind Vision Library. With a passion for knowledge and education, Pradyuman created this space to empower individuals through access to quality resources and a conducive learning environment.</p>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">"Vision Library has completely transformed my study habits. The peaceful environment and extensive collection have helped me excel in my courses."</p>
              <div className="testimonial-author">
                <img src="/api/placeholder/50/50" alt="Member" />
                <div className="author-info">
                  <h4>Sarah Johnson</h4>
                  <p>University Student</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"As a writer, finding the right space to work is crucial. Vision Library offers the perfect balance of inspiration and tranquility."</p>
              <div className="testimonial-author">
                <img src="/api/placeholder/50/50" alt="Member" />
                <div className="author-info">
                  <h4>Michael Chen</h4>
                  <p>Author</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">"The resources available here have been instrumental in my professional development. I'm grateful for Vision Library's commitment to quality."</p>
              <div className="testimonial-author">
                <img src="/api/placeholder/50/50" alt="Member" />
                <div className="author-info">
                  <h4>Priya Patel</h4>
                  <p>Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - New */}
      <section className="cta">
        <div className="container">
          <h3>Ready to Begin Your Journey?</h3>
          <p>Join Vision Library today and unlock a world of knowledge and opportunities.</p>
          <a href="/prices" className="cta-btn">Prices</a>
        </div>
      </section>

      {/* Footer - Enhanced */}
      <footer>
        <div className="footer-content">
          <div className="footer-column">
            <h3>Vision Library</h3>
            <p>Your gateway to success through knowledge and community.</p>
            <div className="social-icons">
              <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#twitter"><i className="fab fa-twitter"></i></a>
              <a href="#instagram"><i className="fab fa-instagram"></i></a>
              <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/Prices">Prices</a></li>
              <li><a href="/Enquiry">Enquiry</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul>
              <li>कृषि विकास शाखा स्टेट बैंक के ऊपर भगवा</li>
              <li>चुंगी, प्रतापगढ़।, Uttar Pradesh 230001</li>
              <li>info@visionlibrary.com</li>
              <li>+91 79055 44622</li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 Vision Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;