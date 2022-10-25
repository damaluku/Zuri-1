import React from "react";
import "./profile.css";
import arrow from "../../assets/arrow.svg";
import dots from "../../assets/dots.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="image_container" id="profile__img"></div>
      <h3 id="twitter">Damian Aluku</h3>
      <h3 id="slack">Damian</h3>
      <span className="share_button">
        <img src={arrow} alt="arrow" />
      </span>
      <span className="dots_button">
        <img src={dots} alt="arrow" />
      </span>
    </div>
  );
};

export default Profile;
