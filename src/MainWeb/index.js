import React from "react";
import { Link } from "react-router-dom";
import challengerImage from "./challengerImage.jpeg";
import chargerImage from "./chargerImage.jpeg";
import chevyImage from "./chevyImage.jpeg";
import mustangImage from "./mustangImage.jpeg";
import "./style.css";

function MainWeb() {
  return (
    <div className="container">
      <nav>
        <ul className="navigation__list">
          <li className="navigation__listItem">
            <Link to="/mustang">
              <img
                className="cars__image"
                src={mustangImage}
                alt="Ford Mustang"
              />
            </Link>
            <h1 className="cars__header">Mustang</h1>
          </li>
          <li className="navigation__listItem">
            <Link to="/chevy">
              <img
                className="cars__image"
                src={chevyImage}
                alt="Chevrolet Camaro"
              />
            </Link>
            <h1 className="cars__header">Camaro</h1>
          </li>
          <li className="navigation__listItem">
            <Link to="/challenger">
              <img
                className="cars__image"
                src={challengerImage}
                alt="Dodge Challenger"
              />
            </Link>
            <h1 className="cars__header">Challenger</h1>
          </li>
          <li className="navigation__listItem">
            <Link to="/charger">
              <img
                className="cars__image"
                src={chargerImage}
                alt="Dodge Charger"
              />
            </Link>
            <h1 className="cars__header">Charger</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainWeb;
