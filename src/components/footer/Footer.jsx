import React from "react";
import "./footer.css";
import ingressive from "../../assets/ingressive.svg";
import vector from "../../assets/vector.svg";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="zuri_container">
        <img src={vector} alt="zuri internship" />
        <span className="dot"></span>
      </div>
      <div className="footer_text">HNG Internship 9 Frontend Task</div>
      <div>
        <img src={ingressive} alt="ingressive for good" />
      </div>
    </footer>
  );
};

export default Footer;
