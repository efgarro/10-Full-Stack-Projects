import React from "react";

export const ContactPicker = ({ contacts, handleContactPicker }) => {
  return (
    <>
      <select onChange={handleContactPicker}>
        <option value="Default">Default</option>
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
