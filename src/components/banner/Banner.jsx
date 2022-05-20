import React from "react";
import "./Banner.css";
import BannerCenter from "../../assets/images/bannerCenter.png";
import BannerDownArrow from "../../assets/svgs/downArrow.svg";

const Banner = () => {
  return (
    <div className="banner d-flex justify-content-center align-items-center flex-column ">
      <div className="banner-center">
        <img src={BannerCenter} alt="banner center" />
      </div>
      <div className="banner-down">
        <img src={BannerDownArrow} alt="load more"/>
      </div>
    </div>
  );
};

export default Banner;
