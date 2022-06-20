import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({ contacts} ) => {
  return (
    <div>
      {contacts.map((person) => {
        return <Tile key={person.id} person={person} />;
      })}
    </div>
  );
};
