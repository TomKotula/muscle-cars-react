import "./style.css";
import frontMustangImage from "./MainMustangImages/frontMustangImage.jpeg";
import leftMustangImage from "./MainMustangImages/leftMustangImage.jpeg";
import rightMustangImage from "./MainMustangImages/rightMustangImage.jpeg";

function Header() {
  return (
    <header>
      <div className="header__container">
        <img
          className="header__images header__images--side"
          src={leftMustangImage}
          alt="Ford Mustang"
        ></img>
        <div>
          <img
            className="header__images header__images--main"
            src={frontMustangImage}
            alt="Ford Mustang"
          ></img>
          <h1 className="header__header">Ford Mustang</h1>
        </div>
        <img
          className="header__images header__images--side"
          src={rightMustangImage}
          alt="Ford Mustang"
        ></img>
      </div>
    </header>
  );
}

export default Header;
