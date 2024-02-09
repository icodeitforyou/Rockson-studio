import React from "react";
import logo from "../media/logo.svg";
import DynamicMenu from "./DynamicMenu";

function Header() {
  return (
    <header className="header_wrapper">
      <div className="container">
        <div className="header_grid">
          <div className="header_grid_item">
            <div className="header_logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
          </div>
          <nav className="header_grid_item header_nav">
            <DynamicMenu />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
