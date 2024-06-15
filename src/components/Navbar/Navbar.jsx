import React from "react";
import "./navbar.css";
import logo from "../../assets/netflix_react_assets/assets/logo.png";
import searchLogo from "../../assets/netflix_react_assets/assets/search_icon.svg";
import bell_icon from "../../assets/netflix_react_assets/assets/bell_icon.svg";
import profile_icon from "../../assets/netflix_react_assets/assets/profile_img.png";
import caret_icon from "../../assets/netflix_react_assets/assets/caret_icon.svg";
const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My list</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchLogo} alt="searchIcon" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="profile_icon" className="profile" />
          <img src={caret_icon} alt="caret_icon" />
          <div className="dropdown">
            <p>Sing Out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
