import React from "react";
import "./style.css";
import Navigation from "../Navigation";
import Header from "../Header";
import OverallInformaion from "./OverallInformation";
import FirstGeneration from "./FirstGeneration";
import SecondGeneration from "./SecondGeneration";
import ThirdGeneration from "./ThirdGeneration";
import FourthGeneration from "./FourthGeneration";
import FifthGeneration from "./FifthGeneration";

import frontMustangImage from "./MainMustangImages/frontMustangImage.jpeg";
import leftMustangImage from "./MainMustangImages/leftMustangImage.jpeg";
import rightMustangImage from "./MainMustangImages/rightMustangImage.jpeg";

function MustangPage() {
  return (
    <div>
      <Navigation />
      <Header
        brand="Ford Mustang"
        mainImage={frontMustangImage}
        leftImage={leftMustangImage}
        rightImage={rightMustangImage}
      />
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

export default MustangPage;
