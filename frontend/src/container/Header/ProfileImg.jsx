import React from "react";
import profile from "../../assets/profile.png";
import "./Header.scss"; // Adjust path if necessary

function ProfileImg() {
  return <img className="profile__image" src={profile} alt="Profile Image" />;
}

export default ProfileImg;
