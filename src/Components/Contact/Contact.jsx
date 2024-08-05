import React from "react";

import styles from "./Contact.module.scss";
import { Link } from "react-router-dom";

import deleteIcon from "../../assets/delete.svg";
import { useDeleteContactMutation } from "../../services/api";
import {
  getFirstName,
  getLastName,
  getEmail,
  getAvatar,
  getTags,
} from "../../helpers/contactCardHelpers";
import toast from "react-hot-toast";

const Contact = ({ person }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async (id, event) => {
    event.stopPropagation();
    try {
      await deleteContact(id).unwrap();
      toast.success("Contact deleted successfully");
    } catch (error) {
      console.error("Failed to delete contact: ", error);
      toast.error("some error");
    }
  };

  const firstName = getFirstName(person);
  const lastName = getLastName(person);
  const email = getEmail(person);
  const avatar = getAvatar(person);
  const tags = getTags(person, styles);

  return (
    <div key={person.id} className={styles["wrapper"]}>
      <Link to={`/${person.id}`} className={`w-full`}>
        <div className="flex gap-2 w-full">
          <img className={styles["avatar"]} src={avatar} alt="" />
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col">
              <h2 className={styles["user-name"]}>
                {firstName} {lastName}
              </h2>
              <span
                onClick={(e) => e.stopPropagation()}
                className={styles["email-link-wrapper"]}
              >
                <p className={styles["email-link"]}>{email}</p>
              </span>
            </div>
            <div className={styles["tags-wrapper"]}>{tags}</div>
          </div>
        </div>
      </Link>
      <button
        className={styles["delete-button"]}
        onClick={(event) => handleDelete(person.id, event)}
      >
        <img src={deleteIcon} alt="Delete" />
      </button>
    </div>
  );
};

export default Contact;
