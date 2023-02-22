import React, { useState } from 'react';
import { FaCrown } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <i>
          <FaCrown />
        </i>
        MacaNacki
      </div>
      <ul className="app__navbar-links" style={{ color: 'white' }}>
        <li className="p__opensans">
          <a href="#security">Security</a>
        </li>
        <li className="p__opensans">
          <a href="#safety">Safety</a>
        </li>
        <li className="p__opensans">
          <a href="#guildline">Guildline</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Contact us
        </a>
        <div />
      </div>
      <div className="app__navbar-smallscreen">
        <BiMenuAltRight
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GrClose
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#security">Security</a>
              </li>
              <li className="p__opensans">
                <a href="#Safety">Safety</a>
              </li>
              <li className="p__opensans">
                <a href="#guildlines">Guildline</a>
              </li>
              <li className="p__opensans">
                <a href="#award">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
