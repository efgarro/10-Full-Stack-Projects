import React from "react";

export const Tile = ({ person }) => {
  return (
    <div className="tile-container">
      <p className="tile">{person.name}</p>
      <p className="tile">{person.phone}</p>
      <p className="tile">{person.email}</p>
    </div>
  );
};
