import React, { useEffect, useState } from "react";
import {
  api,
  useGetContactsQuery,
  useGetSingleContactQuery,
} from "../services/api";
import { useParams } from "react-router-dom";
import contactsJson from "../assets/contacts.json";
import TagsForm from "../Components/TagsForm/TagsForm";

const SingleContactPage = () => {
  const { id } = useParams();
  const { data } = useGetSingleContactQuery(id);

  const [tags, setTags] = useState([]);

  useEffect(() => {
    data && setTags(data.resources[0].tags);

    console.log(tags);
  }, [data]);

  console.log(data && data.resources[0]);
  // const data = contactsJson

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
        className={`flex flex-col gap-2 mx-auto max-w-md bg-[#47249e] max-h-fit mt-auto p-5 rounded-xl`}
      >
        <div className="flex items-center gap-3">
          <img
            className={`h-20 w-20 flex-none rounded-full bg-gray-50 border-2 border-black`}
            src={person.avatar_url}
            alt=""
          />

          <div>
            <h2 className="text-xl font-bold">
              {person.fields["first name"][0]["value"]}{" "}
              {person.fields["last name"][0]["value"]}
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

        <TagsForm />
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
