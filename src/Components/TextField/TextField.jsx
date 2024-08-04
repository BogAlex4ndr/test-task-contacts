
import { Link } from "react-router-dom";
import { Field, ErrorMessage, useField, useFormikContext } from "formik";

import "./TextField.scss";

const TextField = ({
  id,
  className,
  label,
  name,
  type = "text",
  value,
  defaultValue,
  showSuccessIcon = false,
  onChange,
  inputClassName,
  ...props
}) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();

  const isErrorValidation = meta.touched && meta.error;

  const onHandleChangeField = (event) => {
    setFieldValue(field.name, event.target.value);
    onChange && onChange(event);
  };

  return (
    <div className={`text-field ${className}`}>
    <label htmlFor={id} className="text-field__label">
      {label && <p className="text-field__label-text">{label}</p>}
      <div className="text-field__holder">
        <Field
          {...field}
          id={id}
          type={type}
          {...props}
          value={value}
          defaultValue={defaultValue}
          className={`text-field__input ${inputClassName}`}
          onChange={onHandleChangeField}
        />
      </div>
    </label>
    <div className="text-field__helper-box">
      {isErrorValidation ? (
        <ErrorMessage
          name={name || "Field invalid"}
          component="p"
          className="error-message"
        />
      ) : null}
    </div>
  </div>
  );
};

export default TextField;