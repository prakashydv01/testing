import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      {/* CSS Styles */}
      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, #2c3e50 0%, #1a2530 100%);
          color: white;
          padding: 4rem 2rem;
          font-family: 'Montserrat', sans-serif;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }
        
        .footer-logo {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          font-family: 'Playfair Display', serif;
          background: linear-gradient(to right, #4a6cf7, #ff6b6b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .footer-about {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: #bdc3c7;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .social-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .social-icon:hover {
          background: #4a6cf7;
          transform: translateY(-3px);
        }
        
        .footer-heading {
          font-size: 1.3rem;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
          font-weight: 600;
        }
        
        .footer-heading:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #4a6cf7;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
        }
        
        .footer-links li {
          margin-bottom: 0.8rem;
        }
        
        .footer-links a {
          color: #bdc3c7;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-links a:hover {
          color: #4a6cf7;
          padding-left: 5px;
        }
        
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: #bdc3c7;
        }
        
        .contact-icon {
          color: #4a6cf7;
          margin-top: 3px;
        }
        
        .newsletter-input {
          width: 100%;
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 4px;
          margin-bottom: 1rem;
          background: rgba(255,255,255,0.1);
          color: white;
        }
        
        .newsletter-input::placeholder {
          color: #bdc3c7;
        }
        
        .newsletter-btn {
          background: linear-gradient(to right, #4a6cf7, #2541b2);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        
        .newsletter-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(74,108,247,0.4);
        }
        
        .footer-bottom {
          max-width: 1200px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          color: #bdc3c7;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="footer-container">
        {/* Column 1: About */}
        <div>
          <div className="footer-logo">Wanderlust</div>
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
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/tours">Tours & Activities</a></li>
            <li><a href="/hotels">Hotels & Resorts</a></li>
            <li><a href="/travel-tips">Travel Tips</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
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
              <span>+1 (555) 123-4567</span>
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
          <p style={{ color: '#bdc3c7', marginBottom: '1rem' }}>
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