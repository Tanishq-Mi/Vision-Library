import React ,{useState} from 'react'
import './PriceStyles.css'
const Price = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Library Membership & Fees</h2>
          <p>Affordable access to knowledge with flexible batches to suit your schedule</p>
          <a href="#pricing-plans" className="hero-btn">View Pricing</a>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="pricing-plans" className="services-overview">
        <div className="container">
          <h2 className="section-title">Membership Plans</h2>
          
          <div className="services-grid">
           

            {/* Standard Plan */}
            <div className="service-card pricing-card featured">
              <div className="popular-tag">Most Popular</div>
              <div className="service-icon">
                <i className="standard-icon"></i>
              </div>
              <h3>Standard Membership</h3>
              <div className="price">700<span>/month</span></div>
              <ul className="plan-features">
                <li>Book borrowing for study</li>
                <li>Reading room & study spaces</li>
                <li> Wi-Fi access</li>
                <li> Access to Books present</li>
              </ul>
              <a href="/contact" className="cta-btn">Get Started</a>
            </div>

            
          </div>
        </div>
      </section>

      {/* Time Batches */}
      <section id="batches" className="service-detail alt-bg">
        <div className="container">
          <h2 className="section-title">Available Time Batches</h2>
          
          <div className="batch-container">
            {/* Morning Batch */}
            <div className="batch-card">
              <div className="batch-header">
                <div className="batch-icon">
                  <i className="morning-icon"></i>
                </div>
                <h3>Morning Batch</h3>
              </div>
              <div className="batch-time">7:00 AM - 11:00 AM</div>
              <p>Perfect for early risers and those who prefer quiet study time before work or classes.</p>
              
            </div>

            {/* Noon Batch */}
            <div className="batch-card">
              <div className="batch-header">
                <div className="batch-icon">
                  <i className="noon-icon"></i>
                </div>
                <h3>Noon Batch</h3>
              </div>
              <div className="batch-time">12:00 PM - 4:00 PM</div>
              <p>Ideal for professionals on lunch breaks and students after morning classes.</p>
             
            </div>

            {/* Evening Batch */}
            <div className="batch-card">
              <div className="batch-header">
                <div className="batch-icon">
                  <i className="evening-icon"></i>
                </div>
                <h3>Evening Batch</h3>
              </div>
              <div className="batch-time">5:00 PM - 9:00 PM</div>
              <p>Convenient for working professionals and students who need evening study time.</p>
              
            </div>
          </div>
        </div>
      </section>

     

      {/* FAQ Section */}
      <section id="pricing-faq" className="service-detail alt-bg">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div className="faq-container">
            <div className="faq-item">
              <h3>Do you offer family memberships?</h3>
              <p>Yes, we offer family memberships at $25/month, which covers up to 5 family members living at the same address.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I switch between time batches?</h3>
              <p>Absolutely! Members can use the library during any of our time batches. The batch system simply helps us manage capacity and plan activities.</p>
            </div>
            
            <div className="faq-item">
              <h3>Are there discounts for students or seniors?</h3>
              <p>Yes, we offer a 20% discount on all membership plans for students, seniors over 65, and military personnel with valid ID.</p>
            </div>
            
            <div className="faq-item">
              <h3>How do I pay for my membership?</h3>
              <p>We accept credit/debit cards, checks, and cash for in-person payments. You can also set up automatic monthly payments online.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <div className="container">
          <h3>Ready to Become a Member?</h3>
          <p>Join our library community today and get access to thousands of books, comfortable study spaces, and valuable resources.</p>
          <a href="/contact" className="cta-btn">Visit Vision Library</a>
        </div>
      </section>
    </>
  );
};
export default Price
