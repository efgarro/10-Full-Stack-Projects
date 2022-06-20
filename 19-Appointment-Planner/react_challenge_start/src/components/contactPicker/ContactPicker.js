import React from "react";
import { v4 as uuidv4 } from "uuid";

export const ContactPicker = ({ contacts, handleContactPicker }) => {
  return (
    <>
      <select onChange={handleContactPicker}>
        <option key={uuidv4()} value="Default">Default</option>
        {contacts.map((contact) => {
          return (
            <option key={contact.key} value={contact.name}>
              {contact.name}
            </option>
          );
        })}
      </select>
    </>
  );
};
