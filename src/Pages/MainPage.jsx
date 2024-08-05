import React from "react";
import ContactList from "../Components/ContactsList/ContactList";
import ContactsForm from "../Components/ContactsForm/ContactsForm";
import { Toaster } from "react-hot-toast";

const MainPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center py-4 md:px-6 gap-2">
      <div>
        <Toaster />
      </div>
      <ContactsForm />
      <ContactList />
    </div>
  );
};

export default MainPage;
