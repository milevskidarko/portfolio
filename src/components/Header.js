import React from "react";
import Navbar from "./Card/Navbar";

const Header = () => {
  return (
    <div id="main">
      <div className="main">
        <Navbar />
        <div className="name">
          <h1>
            I'm <span>Dare</span> Milevski
          </h1>
          <h5 className="details">Junior Frontend Developer</h5>
          <div className="header-btns">
            <a href="mailto:milevskidarko1989@outlook.com" className="cv-btn">
              Hire Me
            </a>
            <a href="Darko-Milevski.pdf" className="cv-btn1">
              Download CV
            </a>
          </div>
        </div>
        <div className="arrow"></div>
      </div>
    </div>
  );
};
export default Header;
