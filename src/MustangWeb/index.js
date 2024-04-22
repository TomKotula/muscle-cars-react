import React from "react";
import "./style.css";
import Navigation from "./Navigation";
import Header from "./Header";
import OverallInformaion from "./OverallInformation";
import FirstGeneration from "./FirstGeneration";
import SecondGeneration from "./SecondGeneration";
import ThirdGeneration from "./ThirdGeneration";
import FourthGeneration from "./FourthGeneration";

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
      </main>
    </div>
  );
}

export default MustangWeb;
