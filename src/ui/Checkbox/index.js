import React from "react";
import styles from "./index.module.scss";

export function Checkbox({ onChange, checked, label, name }) {
  return (
    <label className={styles.label}>
      <input
        onChange={onChange}
        checked={checked}
        className={styles.checkbox}
        type="checkbox"
        name={name}
      />
      <p className={styles.text}>{label}</p>
    </label>
  );
}
