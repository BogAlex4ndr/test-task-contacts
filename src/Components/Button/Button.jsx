import React from "react";
import styles from "./Button.module.scss";

const Button = ({
  text,
  isDisabled,
  className,
  type = "submit" | "reset" | "button",
}) => {
  return (
    <button
      disabled={isDisabled}
      className={`${styles["buttow-wrapper"]} ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
