import React, { Component } from "react";
import "./intro_and_bio.css";
import Nav_Menu_Icon from "../images/nav_menu_icon.png";
import Diamond from "../images/diamond_image.jpg";
import Dylan_Picture from "../images/pro_pic.png";

class Intro_And_Bio extends React.Component {
  render() {
    return (
      <div className="Intro_And_Bio">
        <div className="Intro">
          <div className="Intro_Text_1">~Web Developer~</div>
          <div className="Intro_Image_1">
            <img className="Diamond_Icon" src={Diamond} />
          </div>
          <div className="Intro_Text_2">
            <div className="Intro_Text_2_1">Dylan</div>
            <div className="Intro_Text_2_2">John</div>
            <div className="Intro_Text_2_3">Casey</div>
            <div className="fake_background">{""}</div>
          </div>
        </div>
        <div className="Bio_Wrapper">
          <div className="Bio">
            <div className="Bio_Image">
              <img className="Dylan_Picture" src={Dylan_Picture} />
              <div className="My_Mission_Header">~My Mission~</div>
              <div className="My_Mission_Text">
                My mission is to help people achieve their personal and
                professional goals through technology. Bringing a vision to life
                using technology comes with a certain sense of satisfaction that
                I haven't found elsewhere. I love watching others succeed and
                having some success of my own in the process.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro_And_Bio;
