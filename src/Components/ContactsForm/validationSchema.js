import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Enter a valid Email")
    .required("Email is required"),
});

export default validationSchema;
