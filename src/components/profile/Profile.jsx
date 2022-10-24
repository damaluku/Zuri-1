import React from "react";
import "./profile.css";
import arrow from "../../assets/arrow.svg";

const Profile = () => {
  return (
    <div className="profile">
      <div className="image_container" id="profile__img"></div>
      <h3>Annette Black</h3>
      <span className="share_button">
        <img src={arrow} alt="arrow" />
      </span>
    </div>
  );
};

export default Profile;
