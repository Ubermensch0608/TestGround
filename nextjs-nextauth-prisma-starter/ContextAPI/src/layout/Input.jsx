import React from "react";

import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      className={styles.input || props.className}
      type={props.type}
      placeholder={props.placeholder || "이곳에 값을 입력해주세요"}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </input>
  );
};

export default Input;
