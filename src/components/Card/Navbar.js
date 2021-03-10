import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="https://www.linkedin.com/in/darko-milevski/">Linkedin</a>
      <input type="checkbox" className="menu-btn" />
      <label className="menu-icon">
        <span></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="https://gitlab.com/Dare1989" className="Hey">
        Gitlab Profile
      </a>
    </nav>
  );
};
export default Navbar;
