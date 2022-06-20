import React, { useState } from "react";
import { useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { v4 as uuidv4 } from "uuid";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicateName, setIsDuplicateName] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    !isDuplicateName
      ? addContacts({ name: name, phone: phone, email: email, id: uuidv4() })
      : alert("user exists already");
    setName("");
    setPhone("");
    setEmail("");
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };
  /*
    Using hooks, check for contact name in the 
    contacts array variable in props
    */
  useEffect(() => {
    console.log(name);
    if (name) {
      const checkUserNotExists = contacts.some((obj) => obj.name === name);
      setIsDuplicateName(checkUserNotExists);
    }
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {contacts && <TileList arrObjs={contacts} />}
      </section>
    </div>
  );
};
