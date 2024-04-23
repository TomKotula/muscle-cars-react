import React from "react";
import "./style.css";
import Navigation from "./Navigation";
import Header from "./Header";
import OverallInformaion from "./OverallInformation";
import FirstGeneration from "./FirstGeneration";
import SecondGeneration from "./SecondGeneration";
import ThirdGeneration from "./ThirdGeneration";
import FourthGeneration from "./FourthGeneration";
import FifthGeneration from "./FifthGeneration";

function MustangWeb() {
  return (
    <div>
      <Navigation />
      <Header />
      <main className="wrapper">
        <OverallInformaion />
        <FirstGeneration />
        <SecondGeneration />
        <ThirdGeneration />
        <FourthGeneration />
        <FifthGeneration />
      </main>
    </div>
  );
}

export default MustangWeb;
