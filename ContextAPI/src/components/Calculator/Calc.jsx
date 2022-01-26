import React, { createContext, useState, useCont } from "react";
import Form from "../../layout/Form";
import Button from "../../layout/Button";

import styles from "./Calc.module.css";

const Calc = ({ onAddNumber }) => {
  const [number, setNumber] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();
    onAddNumber(number);
  };

  const calcHandler = (value) => {
    setNumber((prev) => prev + value);
  };

  const resetHandler = () => {
    setNumber(0);
  };

  return (
    <div className={styles.calculator}>
      <h3>계산기</h3>
      <Form onSubmit={submitHandler}>
        <div>
          <Button type="submit" onClick={() => calcHandler(-1)}>
            -
          </Button>

          <Button type="submit" onClick={() => calcHandler(1)}>
            +
          </Button>
        </div>
        <div>
          <Button type="submit" onClick={() => calcHandler(-5)}>
            -5
          </Button>
          <Button type="submit" onClick={() => calcHandler(5)}>
            +5
          </Button>
        </div>
        <div>
          <Button type="submit" onClick={() => calcHandler(-10)}>
            -10
          </Button>
          <Button type="submit" onClick={() => calcHandler(10)}>
            +10
          </Button>
        </div>
        <div className={styles.reset}>
          <Button type="submit" onClick={resetHandler}>
            리셋
          </Button>
        </div>
      </Form>
      <div>
        <h3>{number}</h3>
        <p>이 결과를</p>
      </div>
    </div>
  );
};

export default Calc;
