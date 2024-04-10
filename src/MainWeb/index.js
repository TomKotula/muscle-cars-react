import React from "react";
import { Link } from "react-router-dom";
import challengerImage from "./challengerImage.jpeg";
import chargerImage from "./chargerImage.jpeg";
import chevyImage from "./chevyImage.jpeg";
import mustangImage from "./mustangImage.jpeg";
import "./style.css";

function MainWeb() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/mustang">
              <img
                className="cars__image"
                src={mustangImage}
                alt="Ford Mustang"
              />
            </Link>
          </li>
          <li>
            <Link to="/chevy">
              <img
                className="cars__image"
                src={chevyImage}
                alt="Chevrolet Camaro"
              />
            </Link>
          </li>
          <li>
            <Link to="/challenger">
              <img
                className="cars__image"
                src={challengerImage}
                alt="Dodge Challenger"
              />
            </Link>
          </li>
          <li>
            <Link to="/charger">
              <img
                className="cars__image"
                src={chargerImage}
                alt="Dodge Charger"
              />
            </Link>
          </li>
        </ul>
      </nav>
      <h1>Main web</h1>
    </div>
  );
}

export default MainWeb;
