import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return(
    <nav className="navbar">
      <div className="container">
        <h4 className="navbar__logo">Kztest</h4>
        <h3 className="navbar__description">Басты бет</h3>
        <div className="navbar__profile-image"></div>
      </div>
    </nav>
  );
}

export default Navbar;