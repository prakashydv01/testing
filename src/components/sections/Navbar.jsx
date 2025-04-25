import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import '../../style/navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          TurPlans
        </Link>

        {/* Fancy Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Menu"
        >
          {isOpen ? (
            <FaTimes className="icon" />
          ) : (
            <HiMenuAlt3 className="icon" />
          )}
        </button>

        {/* Animated Menu */}
        <div 
          ref={menuRef}
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          aria-hidden={!isOpen}
        >
          <div className="menu-content">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              <span className="link-text">Home</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/blog" className="nav-link" onClick={toggleMenu}>
              <span className="link-text">Blogs</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              <span className="link-text">Abouts</span>
              <span className="link-hover"></span>
            </Link>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;