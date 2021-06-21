import React from "react";

import styles from "./index.module.scss";

export function InputBlock(props) {
  const { label, tip, children } = props;
  return (
    <div className={styles.block}>
      <p className={styles.title}>{label}</p>
      {children}
      {tip && <p className={styles.desc}>{tip}</p>}
    </div>
  );
}
