import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
// import { useState } from "react/cjs/react.production.min";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appoints, setAppoints] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = (newPer) => {
    setContacts((prev) => [...prev, newPer]);
  };
  const addAppoints = (title, contact, date, name) => {};

  console.log("Hellow Bella");
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContacts={addContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appoints={appoints} addAppoints={addAppoints} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
