import React, { useEffect } from "react";

import { useState } from "react";
import { api, useGetContactsQuery } from "../../services/api";
import Contact from "../Contact/Contact";
import contactsJson from "../../assets/contacts.json";
const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [personsList, setPersonsList] = useState([]);

  useEffect(() => {
    data && setPersonsList(data.resources);
  }, [data]);

  // const data = contactsJson;

  console.log(data && data.resources);

  return (
    <div className="flex flex-col gap-2 px-4 w-full md:w-8/12">
      <h1 className="text-xl font-bold">Contacts</h1>
      {personsList.map((person) => (
        <Contact key={person.id} person={person} />
      ))}
    </div>
  );
};

export default ContactList;
