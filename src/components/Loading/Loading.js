import React from "react";
import "./Loading.css";

const Loading = ({ who }) => {
  return <p className="loading">{`Loading ${who} ...`}</p>;
};

export default Loading;
