import React from "react";
// import "../css/header.css";
import vista from "../img/Vista-3.jpg"

export const CoverPic = () => {
  return (
    <section>
      <div>
        <h1>Vista 3</h1>
        <img className="coverPic__img" src={vista} alt="" />
      </div>
    </section>
  );
};
