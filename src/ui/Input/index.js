import React from "react";
import styles from "./index.module.scss";

export function Input(props) {
  const { onChange, type = "text", name, value, required, errors } = props;
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={onChange}
        type={type}
        name={name}
        value={value}
        required={required}
        data-error={errors && !!errors[name]}
      />
      {errors && errors[name] && (
        <span className={styles.error}>{errors[name]}</span>
      )}
    </div>
  );
}
