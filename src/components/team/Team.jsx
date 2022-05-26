import React from "react";
import "./Team.css";
import PerfomerOne from "../../assets/images/perfomer1.png";
import RedCoin from "../../assets/images/redCoin.png";
import Luna from "../../assets/images/luna.png";
import portfolioItemImage from "../../assets/images/portfolioItem.jpeg";
import team1 from "../../assets/images/team1.jpg";

const Team = () => {
  return (
    <div className="perfomers-section">
      <div className="perfomers-heading text-color-white">Our team</div>
      <div className="perfomers-items-container d-flex   text-color-white">

        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
        <div className="teamItem">
          <img src={team1} alt="text" />
          <h2>Rahul sharma</h2>
          <h2>Manager</h2>
        </div>
       
      </div>
    </div>
  );
};

export default Team;
