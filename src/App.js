import React from "react";
import "./App.css";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Launch from "./components/launch/Launch";
import Perfomers from "./components/perfomers/Perfomers";

const App = () => {
  return (
    <div className="main-app-container">
      <Header />
      <Banner />
      <About />
      <Launch />
      <Perfomers/>
    </div>
  );
};

export default App;
