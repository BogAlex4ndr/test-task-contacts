import { Form, Formik } from "formik";
import React from "react";
import TextField from "../TextField/TextField";
import Button from "../Button/Button";

import styles from "./TagsForm.module.scss";
import {
  useAddTagsMutation,
  useGetSingleContactQuery,
} from "../../services/api";
import toast from "react-hot-toast";

const TagsForm = ({ id }) => {
  const [addTags] = useAddTagsMutation();
  const { data } = useGetSingleContactQuery(id);

  const handleAddTags = async (values, id) => {
    const tags = values.tags
      .replace(/,/g, " ")
      .split(/\s+/)
      .filter((tag) => tag !== "")
      .map((tag) => tag.trim());

    const tagsData = {
      id: id,
      body: {
        tags: Array.from(
          new Set([...data.resources[0].tags.map((tag) => tag.tag), ...tags])
        ),
      },
    };

    try {
      await addTags(tagsData).unwrap();
      toast.success("Tags added successfully");
    } catch (error) {
      toast.error("Something went wrong 😐");
      console.log(error);
    }
  };
  return (
    <Formik
      initialValues={{
        tags: "",
      }}
      onSubmit={async (values) => {
        handleAddTags(values, id);
      }}
    >
      {({ isSubmitting, values, isValid }) => (
        <Form className={styles["wrapper"]}>
          <TextField
            name="tags"
            id="tags"
            placeholder="Add new Tag"
            value={values.tags}
            inputClassName="w-full rounded-xl h-12 px-2"
          />
          <Button text={`Add Tags`} type="submit" />
        </Form>
      )}
    </Formik>
  );
};

export default TagsForm;
