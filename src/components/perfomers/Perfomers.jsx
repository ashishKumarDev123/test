import React from "react";
import "./Perfomers.css";
import PerfomerOne from "../../assets/images/perfomer1.png";
import RedCoin from "../../assets/images/redCoin.png";
import Luna from "../../assets/images/luna.png";

const Perfomers = () => {
  return (
    <div className="perfomers-section">
      <div className="perfomers-heading text-color-white">BEST PERFORMERS</div>
      <div className="perfomers-items-container d-flex justify-content-center  text-color-white">
        <div className="perfomers-item ">
          <div className="perfomers-item-img-container">
            <img src={PerfomerOne} alt="img" />
          </div>
          <div className="text-color-white text-center perfomers-item-heading">ATH ROI</div>
          <div className="text-color-white text-center perfomers-item-number">60x</div>
          <div className="text-color-white text-center perfomers-item-heading">$1000 BECAME</div>
          <div className="text-color-white text-center perfomers-item-number">$60,000</div>
          <div className="perfomers-item-name text-center">OUTER RING $GQ</div>
          <div className="perfomers-item-company text-center">GAMEFI</div>
        </div>
        <div className="perfomers-item ">
          <div className="perfomers-item-img-container">
            <img src={RedCoin} alt="img" />
          </div>
          <div className="text-color-white text-center perfomers-item-heading">ATH ROI</div>
          <div className="text-color-white text-center perfomers-item-number">60x</div>
          <div className="text-color-white text-center perfomers-item-heading">$1000 BECAME</div>
          <div className="text-color-white text-center perfomers-item-number">$60,000</div>
          <div className="perfomers-item-name text-center">OUTER RING $GQ</div>
          <div className="perfomers-item-company text-center">GAMEFI</div>
        </div>
        <div className="perfomers-item ">
          <div className="perfomers-item-img-container" >
            <img src={Luna} alt="img" />
          </div>
          <div className="text-color-white text-center perfomers-item-heading">ATH ROI</div>
          <div className="text-color-white text-center perfomers-item-number">60x</div>
          <div className="text-color-white text-center perfomers-item-heading">$1000 BECAME</div>
          <div className="text-color-white text-center perfomers-item-number">$60,000</div>
          <div className="perfomers-item-name text-center">OUTER RING $GQ</div>
          <div className="perfomers-item-company text-center">GAMEFI</div>
        </div>
       
        
        
       
      </div>
    </div>
  );
};

export default Perfomers;
