import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      ContactForm
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Names"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Add Contact</button>
      </form>
    </>
  );
};
