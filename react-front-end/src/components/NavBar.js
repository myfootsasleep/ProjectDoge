import React from 'react';
import "./NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="nav-link" href="#home">Home</a>
      <a className="nav-link" href="#about-me">About Me</a>
      <a className="nav-link" href="#about-ronan">About Ronan</a>
      <a className="nav-link" href="#photos">Photos</a>
      <a className="nav-link" href="#merch">Merch</a>
      <a className="nav-link" href="#contact">Contact</a>
    </nav>
  );
}

export default NavBar;
