import React from "react";
import "./Banner.css";
import BannerCenter from "../../assets/images/bannerCenter.png";
import BannerDownArrow from "../../assets/svgs/downArrow.svg";
import Typist from 'react-typist';

const Banner = () => {
  const scrollDown=()=>{

    window.scrollTo(0,900)

  }
  return (
    <div className="banner d-flex justify-content-center align-items-center flex-column ">
      <div className="banner-center">
       <h1 className="text-color-white"><Typist>INvesting in the future of blockchain</Typist> </h1>
      </div>
      <div className="banner-down" onClick={scrollDown}>
        <img src={BannerDownArrow} alt="load more"/>
      </div>
    </div>
  );
};

export default Banner;
