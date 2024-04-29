import React, { useState } from "react";
import frontChallengerImage from "./frontChallengerImage.jpeg";
import leftChallengerImage from "./leftChallengerImage.jpeg";
import rightChallengerImage from "./rightChallengerImage.jpeg";
import "./style.css";

function ChallengerPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    const sideNav = document.getElementById("sideNav");
    const hamburgerMenu = document.querySelector(".hamburger__menu");
    if (sideNav.style.width === "250px") {
      sideNav.style.width = "0";
      hamburgerMenu.classList.remove("open");
    } else {
      sideNav.style.width = "250px";
      hamburgerMenu.classList.add("open");
    }
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    const sideNav = document.getElementById("sideNav");
    sideNav.style.width = "0";
    const hamburgerMenu = document.querySelector(".hamburger__menu");
    hamburgerMenu.classList.remove("open");
    setIsNavOpen(false);
  };

  return (
    <div>
      <nav className="navigation">
        <div className="hamburger__menu" onClick={toggleNav}>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
          <div className="hamburger__line"></div>
        </div>

        <div id="sideNav" className={isNavOpen ? "sidenav open" : "sidenav"}>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Overall information
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            First generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Second generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Third generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            In popular culture
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Safety features
          </a>
        </div>
      </nav>
      <header>
        <div className="header__container">
          <img
            className="header__images header__images--side"
            src={leftChallengerImage}
            alt="Dodge Challenger"
          ></img>
          <div>
            <img
              className="header__images header__images--main"
              src={frontChallengerImage}
              alt="Dodge Challenger"
            ></img>
            <h1 className="header__header">Dodge Challenger</h1>
          </div>
          <img
            className="header__images header__images--side"
            src={rightChallengerImage}
            alt="Dodge Challenger"
          ></img>
        </div>
      </header>
    </div>
  );
}

export default ChallengerPage;
