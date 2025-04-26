import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      {/* CSS Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%);
          color: white;
          padding: 2rem 1rem;
          font-family: 'Montserrat', sans-serif;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(to right, #4a6cf7, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .footer-about {
          margin-bottom: 1rem;
          line-height: 1.6;
          color: #bdc3c7;
          font-size: 0.9rem;
        }
        
        .footer-social {
          display: flex;
          gap: 0.8rem;
          margin-top: 1rem;
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
          font-size: 0.9rem;
        }
        
        .social-icon:hover {
          background: #4a6cf7;
          transform: translateY(-3px);
        }
        
        .footer-heading {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          position: relative;
          padding-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .footer-heading:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 40px;
          height: 2px;
          background: #4a6cf7;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.6rem;
        }
        
        .footer-links a {
          color: #bdc3c7;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }
        
        .footer-links a:hover {
          color: #4a6cf7;
          padding-left: 5px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.8rem;
          color: #bdc3c7;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .contact-icon {
          color: #4a6cf7;
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        .newsletter-input {
          width: 100%;
          padding: 0.7rem;
          border: none;
          border-radius: 4px;
          margin-bottom: 0.8rem;
          background: rgba(255,255,255,0.1);
          color: white;
          font-size: 0.9rem;
        }
        
        .newsletter-input::placeholder {
          color: #bdc3c7;
        }
        
        .newsletter-btn {
          background: linear-gradient(to right, #4a6cf7, #2541b2);
          color: white;
          border: none;
          padding: 0.7rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          width: 100%;
        }
        
        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(74,108,247,0.4);
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: #bdc3c7;
          font-size: 0.8rem;
          line-height: 1.4;
        }
        
        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .footer {
            padding: 1.5rem 1rem;
          }
          
          .footer-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .footer-heading {
            margin-top: 1rem;
          }
          
          .footer-social {
            justify-content: center;
            margin-top: 1.5rem;
          }
          
          .footer-bottom {
            margin-top: 1.5rem;
            padding-top: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .footer-logo {
            text-align: center;
          }
          
          .footer-about {
            text-align: center;
          }
          
          .footer-heading {
            text-align: center;
          }
          
          .footer-heading:after {
            left: 50%;
            transform: translateX(-50%);
          }
          
          .footer-links {
            text-align: center;
          }
          
          .footer-links a {
            justify-content: center;
          }
          
          .contact-item {
            justify-content: center;
            text-align: center;
          }
          
          .newsletter-input, .newsletter-btn {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Column 1: About */}
        <div>
          <div className="footer-logo">TurPlans</div>
          <p className="footer-about">
            Discover the world's most beautiful destinations with our curated travel experiences. 
            We help you create unforgettable memories.
          </p>
          <div className="footer-social">
            <div className="social-icon"><FaFacebook /></div>
            <div className="social-icon"><FaTwitter /></div>
            <div className="social-icon"><FaInstagram /></div>
            <div className="social-icon"><FaPinterest /></div>
            <div className="social-icon"><FaYoutube /></div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
       
            
            
            <li><a href="/travel-tips">Travel Tips</a></li>
            <li><Link to="/about">About Us</Link></li>
            
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MdLocationOn className="contact-icon" />
              <span>123 Travel Street, Wanderlust City, WC 10001</span>
            </div>
            <div className="contact-item">
              <MdPhone className="contact-icon" />
              <span>+9779809612558</span>
            </div>
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>info@wanderlust.com</span>
            </div>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="footer-heading">Newsletter</h3>
          <p style={{ color: '#bdc3c7', marginBottom: '1rem', fontSize: '0.9rem' }}>
            Subscribe to get special offers and travel inspiration
          </p>
          <input 
            type="email" 
            placeholder="Your email address" 
            className="newsletter-input"
          />
          <button className="newsletter-btn">
            Subscribe
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wanderlust Travel. All rights reserved. | Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;