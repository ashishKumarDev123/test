import React from "react";
import "./Perfomers.css";
import PerfomerOne from "../../assets/images/perfomer1.png";
import RedCoin from "../../assets/images/redCoin.png";
import Luna from "../../assets/images/luna.png";
import portfolioItemImage from "../../assets/images/portfolioItem.jpeg";

const Perfomers = () => {
  return (
    <div className="perfomers-section">
      <div className="perfomers-heading text-color-white">Portfolio</div>
      <div className="perfomers-items-container d-flex   text-color-white">

        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
        <div className="portfolioItem">
          <img src={portfolioItemImage} alt="text" />
        </div>
      </div>
    </div>
  );
};

export default Perfomers;
