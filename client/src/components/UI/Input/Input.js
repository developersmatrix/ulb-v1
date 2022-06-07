import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={`${styles.input__container} ${props.className}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;
