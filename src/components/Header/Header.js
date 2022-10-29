import React from "react";
import Logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <img src={Logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
