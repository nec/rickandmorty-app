import React, { PureComponent } from "react";
import "./Footer.css";

class Footer extends PureComponent {
  render() {
    return (
      <footer className="App-footer">
        {new Date().getFullYear()} &copy; Powered by{" "}
        <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">
          rickandmortyapi
        </a>
      </footer>
    );
  }
}

export default Footer;
