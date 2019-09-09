import React, { Component } from "react";
import "./projects.css";
import Diamond from "../images/diamond_image.jpg";
import Github from "../images/github_icon_2.png";
import Instagram from "../images/instagram_icon_2.jpeg";
import Facebook from "../images/facebook_icon_3.png";
import Twitter from "../images/twitter_icon_2.jpeg";
import True_Tone from "../images/true_tone_logo.png";

class Projects extends React.Component {
  render() {
    let externalUrlLinks = {
      github: "https://github.com/dylancasey5150",
      twitter: "https://twitter.com/DylanCasey2",
      instagram: "https://www.instagram.com/dylancasey5150/",
      facebook: "https://www.facebook.com/dylan.casey.169",
      truetone: "http://truetonebeta.com/"
    };
    return (
      <div className="Projects_Wrapper">
        <div className="Project_Line_1">
          <hr class="project_lines" />
        </div>

        <div className="Project_Images">
          <div className="Social_Medias_Description">
            Follow me on social media!
          </div>
          <div className="Social_Media_Images">
            <a href={externalUrlLinks.twitter} target="_blank">
              <img className="Twitter_Image" src={Twitter} />
            </a>

            <a href={externalUrlLinks.instagram} target="_blank">
              <img className="Instagram_Image" src={Instagram} />
            </a>
            <a href={externalUrlLinks.facebook} target="_blank">
              <img className="Facebook_Image" src={Facebook} />
            </a>
          </div>

          <div className="Github_Description">
            See my repositories on github!
          </div>

          <a href={externalUrlLinks.github} target="_blank">
            <img className="Github_Image" src={Github} />
          </a>
          <div className="True_Tone_Descrpition">
            True Tone is a service that matches users to makeup based on their
            unique features.
          </div>

          <a href={externalUrlLinks.truetone} target="_blank">
            {" "}
            <img className="True_Tone_Image" src={True_Tone} />
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
