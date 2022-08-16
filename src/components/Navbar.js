import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Mikayla Ryan <FontAwesomeIcon icon={solid("palette")} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? solid("times") : solid("bars")} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/instagram"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Instagram
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Gallery</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
