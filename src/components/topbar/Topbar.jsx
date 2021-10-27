import React from "react";
import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";


function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo' >genius.</a>
          <div className="itemContainer">
            <Person/>
            <span>+91 7409571001</span>
          </div>
        </div>
        <div className="right">
          <a href="#works">dsdf</a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
