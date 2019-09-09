import React, { Component } from "react";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <div className="About_Wrapper">
        <div className="About_Header">~Skills~</div>{" "}
        <div className="Programming_Languages_Header">
          Programming Languages
        </div>
        <div className="Programming_Languages_Content">
          HTML, CSS, PHP, JavaScript, JSX, JQuery, Ajax
        </div>
        <div className="Related_Technology_Header">Related Technology</div>
        <div className="Related_Technology_Content">
          Bootstrap, SQL, PhpMyAdmin, Wordpress, JustInMind, React
        </div>
        <div className="Related_Courses_Header">Related Courses</div>
        <div className="Related_Courses_Content">
          Data Analytics, Data Centric Application Development, Enterprise IT
          Architecture, Digital Solutions Studio, Application Integration and
          Evaluation, Lead Global Digital Projects
        </div>
      </div>
    );
  }
}

export default About;
