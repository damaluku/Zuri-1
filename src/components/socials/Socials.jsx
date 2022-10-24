import React from "react";
import { BsGithub } from "react-icons/bs";
import slack from "../../assets/slackLogo.svg";
import "./social.css";

const Socials = () => {
  return (
    <div className="social_container">
      <img src={slack} alt="github" />
      <BsGithub />
    </div>
  );
};

export default Socials;
