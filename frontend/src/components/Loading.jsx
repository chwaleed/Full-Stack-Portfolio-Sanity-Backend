import React from "react";
import "./Loading.scss";
import Thinking from "../assets/Thinking.svg";

function Loading() {
  return (
    <div className="loading__main">
      <div></div>
      <img src={Thinking} />
    </div>
  );
}

export default Loading;
