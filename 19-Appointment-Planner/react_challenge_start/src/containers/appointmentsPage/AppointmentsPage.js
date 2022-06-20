import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";
import { v4 as uuidv4 } from "uuid";

export const AppointmentsPage = ({ appoints, addAppoints, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
  console.log(appoints);
  console.log(addAppoints);
  console.log(contacts);

  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addAppoints({
      title: title,
      date: date,
      time: time,
      contact: contact,
      id: uuidv4(),
    });
    /*
    Add contact info and clear data  
    */
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          contacts={contacts}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        {appoints && <TileList arrObjs={appoints} />}
      </section>
    </div>
  );
};
