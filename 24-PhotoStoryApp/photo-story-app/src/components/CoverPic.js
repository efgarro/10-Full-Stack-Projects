import React from "react";
// import "../css/header.css";
import vista from "../img/Vista-3.jpg"

export const CoverPic = () => {
  return (
    <section>
      <div>
        <img className="coverPic__img" src={vista} alt="" />
      </div>
    </section>
  );
};
