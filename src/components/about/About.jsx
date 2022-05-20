import React from "react";
import "./About.css";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="about-container w-100 d-flex align-items-center justify-content-center flex-column">
      <div className="about-heading text-color-white">
        A GOLD STANDARD COMMUNITY-BACKED INVESTMENT GROUP, SUPPORTING ONLY THE
        BEST BLOCKCHAIN PROJECTS.
      </div>
      <div className="about-count-container text-center row text-color-white">
        <div className="col-3 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div className="abount-count-item-heading" style={{marginTop:"5px"}}>PORTFOLIO</div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-3 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div className="abount-count-item-heading" style={{marginTop:"5px"}}>PORTFOLIO</div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-3 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div className="abount-count-item-heading" style={{marginTop:"5px"}}>PORTFOLIO</div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
        <div className="col-3 about-count-item d-flex justify-content-center align-items-center flex-column">
          <div className="abount-count-item-number">150+</div>
          <div className="abount-count-item-heading" style={{marginTop:"5px"}}>PORTFOLIO</div>
          <div className="abount-count-item-heading">PORTFOLIO</div>
        </div>
       
      </div>
      <div className="about-mh-ventures text-center text-color-white">
      ABOUT MH VENTURES
      </div>
      

      <Marquee style={{background:"transparent"}} className="text-color-white marqueCustom">
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
    <h1>hey</h1>
  </Marquee>
     
    </div>
  );
};

export default About;
