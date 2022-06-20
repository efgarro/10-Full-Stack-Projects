import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ arrObjs } ) => {
  return (
    <div>
      {arrObjs.map((obj) => {
        return <Tile key={obj.id} obj={obj} />;
      })}
    </div>
  );
};
