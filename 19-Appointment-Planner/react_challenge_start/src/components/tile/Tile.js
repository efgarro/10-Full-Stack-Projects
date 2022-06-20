import React from "react";

export const Tile = ({ obj }) => {
  return (
    <div className="tile-container">
      {Object.keys(obj).map((key) => <p key={obj[key]} className="tile">{obj[key]}</p>)}
    </div>
  );
};
