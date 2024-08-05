import React, { useEffect, useState } from "react";
import { useGetSingleContactQuery } from "../../services/api";
import { Link, useParams } from "react-router-dom";
import TagsForm from "../../Components/TagsForm/TagsForm";
import { getFirstName, getLastName } from "../../helpers/contactCardHelpers";

import homePage from "../../assets/HomePage.svg";

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
      <div
        className={`flex flex-col gap-2 mx-auto max-w-md bg-[#47249e] max-h-fit mt-auto p-5 rounded-xl relativel`}
      >
        <div className="flex items-center gap-3 relative">
          <Link
            to={"/"}
            className="absolute top-4 right-0 flex flex-col items-center"
          >
            <img src={homePage} className="w-12 h-12" alt="Home" />
          </Link>
          <img
            className={`h-20 w-20 flex-none rounded-full bg-gray-50 border-2 border-black`}
            src={person.avatar_url}
            alt=""
          />

          <div>
            <h2 className="text-xl font-bold">
              {firstName} {lastName}
            </h2>
            <a
              href={`mailto:${person.fields.email[0].value}`}
              className="m-0 truncate text-lg hover:text-[#9877f5] w-fit"
            >
              {person.fields.email[0].value}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-base font-bold">Tags</p>
          <div className="flex flex-wrap gap-2 max-w-[100%]">
            {tags.length > 0 ? (
              tags.map((item) => (
                <p
                  className="bg-gray-400 rounded-3xl px-2 text-white font-bold hover:text-black hover:bg-white transition-all duration-300 ease-in-out cursor-pointer"
                  key={item.id}
                >
                  {item.tag}
                </p>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>
        </div>

        <TagsForm id={id} tags={tags} />
      </div>
    );
  } else
    return (
      <div className="flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
};

export default SingleContactPage;
