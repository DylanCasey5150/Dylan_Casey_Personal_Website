import React, { Component } from "react";
import "./resume.css";
import Resume_Image from "../images/Resume_All_Things_Dylan.png";

class Resume extends React.Component {
  render() {
    return (
      <div className="Resume_Wrapper">
        <div className="Resume_Line">
          <hr />
        </div>
        <div className="Resume_Header">~Resume~</div>
        <img className="Resume_Image" src={Resume_Image} />
      </div>
    );
  }
}

export default Resume;
