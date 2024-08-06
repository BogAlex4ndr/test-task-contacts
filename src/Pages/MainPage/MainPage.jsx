import React from "react";
import { ContactList } from "../../Components";
import { ContactsForm } from "../../Components";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center py-4 md:px-6 gap-2">
      <ContactsForm />
      <ContactList />
    </div>
  );
};

export default MainPage;
