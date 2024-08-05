import { Form, Formik } from "formik";
import React from "react";
import validationSchema from "./validationSchema";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import styles from "./ContactsForm.module.scss";
import { useAddContactMutation } from "../../services/api";
import toast from "react-hot-toast";

const ContactsForm = () => {
  const [addContact] = useAddContactMutation();

  const handleSubmit = async (values, { resetForm }) => {
    if (!values.firstName && !values.lastName) {
      toast.error("Add first or last name");
      return;
    }
    const newContact = {
      record_type: "person",
      fields: {
        email: [
          {
            label: "email",
            modifier: "other",
            value: values.email,
            is_primary: false,
          },
        ],
        "first name": [
          {
            label: "first name",
            modifier: "",
            value: values.firstName || " ",
            is_primary: false,
          },
        ],
        "last name": [
          {
            label: "last name",
            modifier: "",
            value: values.lastName || " ",
            is_primary: false,
          },
        ],
      },
      privacy: {
        edit: null,
        read: null,
      },
      owner_id: null,
    };
    await addContact(newContact).unwrap();
    toast.success("Contact added");
    resetForm();
  };

  return (
    <div className={styles["wrapper"]}>
      <h1 className="text-xl font-bold">Create Contact</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, isValid }) => (
          <Form className={styles["form-container"]}>
            <TextField
              name="firstName"
              id="firstName"
              label="First Name"
              value={values.firstName}
              inputClassName={`px-2 h-12`}
            />
            <TextField
              id="lastName"
              name="lastName"
              label="Last Name"
              value={values.lastName}
              inputClassName={`px-2 h-12`}
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              value={values.email}
              type="email"
              inputClassName={`px-2 h-12`}
            />
            <Button text={`Add Contact`} isDisabled={!isValid} type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactsForm;
