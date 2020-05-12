import React from "react";
import Meta from "./metamask.png";

function Header() {
  return (
    <div className="header">
      <div className="header_icon"></div>
      <div className="header_text">PUBLISHING</div>
      <button>
        CONNECT
        <img src={Meta} alt="metamask" />
      </button>
    </div>
  );
}

export default Header;
