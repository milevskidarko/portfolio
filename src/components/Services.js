import React from "react";
import Cards from "./Card/Cards";
import Data from "./Card/Data";
import image1 from "./Card/s1.png";
import image2 from "./Card/s2.png";
import image3 from "./Card/s3.png";

const Services = () => {
  return (
    <div id="services">
      <div className="service">
        <div className="service-heading">
          <h1>My Projects</h1>
        </div>
        <div className="b-container">
          <Cards
            stype={Data[0].stype}
            simage={image1}
            sdescription={Data[0].sdescription}
            href={Data[0].href}
          />
          <Cards
            stype={Data[1].stype}
            simage={image2}
            sdescription={Data[1].sdescription}
            href={Data[1].href}
          />
          <Cards
            stype={Data[2].stype}
            simage={image3}
            sdescription={Data[2].sdescription}
            href={Data[2].href}
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
