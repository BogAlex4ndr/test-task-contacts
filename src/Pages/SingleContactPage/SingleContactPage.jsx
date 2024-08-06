import React, { useEffect, useState } from "react";
import { useGetSingleContactQuery } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import { TagsForm, Tag } from "../../Components";
import { getFirstName, getLastName } from "../../helpers/contactCardHelpers";
import homePage from "../../assets/HomePage.svg";

import styles from "./SingleContactPage.module.scss";
import toast from "react-hot-toast";

const SingleContactPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleContactQuery(id);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    data && setTags(data.resources[0].tags);
  }, [data]);

  const firstName = data && getFirstName(data.resources[0]);
  const lastName = data && getLastName(data.resources[0]);

  const filterById = (data, idToFilter) => {
    return data.filter((item) => item.id === idToFilter)[0];
  };

  const person = data && data.resources[0];

  // const tags = person.tags ? person.tags.map((item) =>
  // <p
  // className='bg-gray-400 rounded-3xl px-2 text-white font-bold hover:text-black hover:bg-white transition-all duration-300 ease-in-out cursor-pointer'
  // key={item.id}>
  //     {item.tag}
  // </p>
  // ) : null

  if (data) {
    return (
      <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
          <Link to={"/"} className={styles["back-link"]}>
            <img src={homePage} alt="Home" />
          </Link>
          <img
            className={styles["avatar"]}
            src={person.avatar_url}
            alt="Avatar"
          />

          <div>
            <h1 className={styles["user-name"]}>
              {firstName} {lastName}
            </h1>
            <Link
              to={`mailto:${person.fields.email[0].value}`}
              className={styles["email"]}
            >
              {person.fields.email[0].value}
            </Link>
          </div>
        </div>
        <div className={styles["tags-wrapper"]}>
          <h3>Tags</h3>
          <ul>
            {tags.length > 0 ? (
              tags.map((item) => <Tag key={item.id} item={item} />)
            ) : (
              <p>No tags available</p>
            )}
          </ul>
        </div>

        <TagsForm id={id} tags={tags} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }
};

export default SingleContactPage;
