import React from "react";
import styles from "./index.module.scss";

export function Button(props) {
  const { onClick, disabled, label } = props;
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
