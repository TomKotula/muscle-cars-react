import React, { useState } from "react";
import "./style.css";

function ChargerWeb() {
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
            Fourth generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Fifth generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Sixth generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Seventh generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            Eighth generation
          </a>
          <a href="#" className="sideNav__links" onClick={closeNav}>
            In popular culture
          </a>
        </div>
      </nav>
      <div></div>
    </div>
  );
}

export default ChargerWeb;
