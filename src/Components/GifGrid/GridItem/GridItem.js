import React from "react";
import "./GridItem.css";
import 'animate.css'
const GridItem = ({ title, url, id }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GridItem;
