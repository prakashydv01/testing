import React from 'react';
import { Link } from 'react-router-dom';
import  '../../style/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          TravelEscape
        </Link>
        
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
          <Link to="#" className="nav-link">
            Abouts
          </Link>
          <Link to="#" className="nav-link">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;