import React, { useEffect, useState } from "react";
import axios from "axios";
import Contact from "./Contact";
export default function ContactList() {
  const [contacts, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4200/")
      .then(async (res) => {
        await setState(res.data);
      });
  }, []);

  const deleteContact = (id) => {
    axios
      .delete("http://localhost:4200/" + id)
      .then((res) => {
        console.log(res.data);
        setState(contacts.filter((el) => el._id !== id));
      });
  };

  if (contacts.length === 0) {
    return <div>Loading!!</div>;
  } else {
    return contacts.map((currentContact) => (
      <Contact
        currentContact={currentContact}
        deleteContact={deleteContact}
        key={currentContact._id}
      />
    ));
  }
}
