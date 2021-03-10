import React from "react";
import image from "../images/dareBg.jpg";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <div className="about-model">
          <img src={image} alt="img" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p className='about-me'>
            Beginner in developing web based applications using ReactJS,
            Javascript, HTML5, CSS3, Boostrap.
            <br />- Tools: GIT
            <br /> - Operating Systems:Microsoft: Windows, Linux, Android
            <br />- Methodologies: Agile (scrum),Waterfall
            <br />- Highly capable at learning things quickly and good at time
            management
            <br />- Professional communication skills and customer relations.
          </p>
          <button>View more details</button>
        </div>
      </div>
    </div>
  );
};
export default About;
