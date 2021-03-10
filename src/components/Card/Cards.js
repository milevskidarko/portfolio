import React from "react";

const Cards = (props) => {
  return (
    <div className="service-box">
      <div className="service-box-img">
        <div className="service-type">
        <a href={props.href}>{props.stype}</a>
        </div>
        <img src={props.simage} alt="img" />
      </div>
      <div className="service-box-test"></div>
    </div>
  );
};
export default Cards;
