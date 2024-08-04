import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string().email('Enter a valid Email').required('Email is required')
}).test('one-of-required', 'Please enter either first name or last name', function(value) {
  return !!(value.firstName?.trim() || value.lastName?.trim());
});

export default validationSchema;