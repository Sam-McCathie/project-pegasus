import React from "react";
import "./Header.scss";
import Home from "../../svgs/Home.svg";
import Notifications from "../../svgs/Notifications.svg";
import XP from "../../svgs/XP.svg";
import Profile from "../../svgs/Profile.svg";
import {Link} from "react-router-dom";

export const Header = () => {
  return (
    <nav className="header">
      <div className="header__content">
        <div className="header__logo">Logo</div>
        <div className="header__buttons">
          <Link to="/">
            <div className="header__button">
              <img src={Home} alt=""></img>
            </div>
          </Link>
          <div className="header__button">
            <img src={Notifications} alt=""></img>
          </div>
          <div className="header__button">
            <img src={XP} alt=""></img>
          </div>
          <div className="header__button">
            <img src={Profile} alt=""></img>
          </div>
        </div>
      </div>
    </nav>
  );
};
