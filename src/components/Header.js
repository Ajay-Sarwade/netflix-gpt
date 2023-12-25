import React from "react";
import netflixLogo from "../images/netflixLogo.png";

function Header() {
  return (
    <div className="">
      <img
        className="w-56 absolute z-10  bg-gradient-to-br from-black to-white-500"
        src={netflixLogo}
        alt="netflix-logo"
      />
    </div>
  );
}

export default Header;
