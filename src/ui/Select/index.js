import React from "react";

import styles from "./index.module.scss";

export function Select({ options = [], onChange, value, name }) {
  return (
    <select
      className={styles.select}
      onChange={onChange}
      value={value}
      size="1"
      name={name}
    >
      {options.map((option) => (
        <option key={option.city}>{option.city}</option>
      ))}
    </select>
  );
}
