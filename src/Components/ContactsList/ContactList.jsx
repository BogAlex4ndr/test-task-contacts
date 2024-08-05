import React, { useEffect } from "react";
import { useState } from "react";
import { useGetContactsQuery } from "../../services/api";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const { data, refetch } = useGetContactsQuery();
  const [personsList, setPersonsList] = useState([]);

  useEffect(() => {
    data && setPersonsList(data.resources);
  }, [data, refetch]);

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
