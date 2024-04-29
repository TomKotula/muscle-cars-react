import "./style.css";

function Header({ brand, mainImage, leftImage, rightImage }) {
  return (
    <header>
      <div className="header__container">
        <img
          className="header__images header__images--side"
          src={leftImage}
          alt={brand}
        ></img>
        <div>
          <img
            className="header__images header__images--main"
            src={mainImage}
            alt={brand}
          ></img>
          <h1 className="header__header">{brand}</h1>
        </div>
        <img
          className="header__images header__images--side"
          src={rightImage}
          alt={brand}
        ></img>
      </div>
    </header>
  );
}

export default Header;
