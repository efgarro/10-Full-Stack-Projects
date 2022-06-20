import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

export const AppointmentForm = ({
  title,
  setTitle,
  date,
  setDate,
  time,
  setTime,
  contact,
  setContact,
  contacts,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleContactPicker = (e) => {
    setContact(e.target.value);
  };

  return (
    <>
      ContactForm
      <form onSubmit={handleSubmit}>
        <input
          title="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="date"
          type="date"
          min={getTodayString}
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          name="time"
          type="time"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <ContactPicker
          contacts={contacts}
          handleContactPicker={handleContactPicker}
        />
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
