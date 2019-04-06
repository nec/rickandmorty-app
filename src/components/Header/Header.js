import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <h1 className="App-title">The rick and morty api</h1>
      </header>
    );
  }
}

export default Header;
