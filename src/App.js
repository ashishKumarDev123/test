import React from "react";
import "./App.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Launch from "./components/launch/Launch";
import Partners from "./components/partners/Partners";
import Perfomers from "./components/perfomers/Perfomers";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <div className="main-app-container">
      <Header />
      <Banner />
      <About />
      <Launch />
      <Perfomers/>
      <Partners/>
      <Portfolio/>
    </div>
  );
};

export default App;
