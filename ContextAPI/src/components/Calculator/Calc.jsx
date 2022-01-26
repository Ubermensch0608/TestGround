import React from "react";
import Form from "../../layout/Form";
import Button from "../../layout/Button";

import styles from "./Calc.module.css";
import { useDispatch, useSelector } from "react-redux";
import { calcActions } from "../../store/index";

const Calc = () => {
  const dispatch = useDispatch();
  const calcNumber = useSelector((state) => state.calc.calcNumber);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const calcHandler = (number) => {
    dispatch(calcActions.calc(number));
  };

  const resetHandler = () => {
    dispatch(calcActions.calc(-calcNumber));
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
        <h3>{calcNumber}</h3>
        <p>이 결과를</p>
      </div>
    </div>
  );
};

export default Calc;
