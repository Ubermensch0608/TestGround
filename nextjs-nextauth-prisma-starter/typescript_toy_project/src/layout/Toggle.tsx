import { SliderProps, ToggleProps } from "models/model";
import React from "react";

import styled from "styled-components";

const Toggle: React.FC<ToggleProps> = (props) => {
  return (
    <Switch htmlFor={props.htmlFor}>
      <HiddenInput id={props.id} type="checkbox" onChange={props.onChange} />
      <Slider isToggled={props.isToggled}></Slider>
    </Switch>
  );
};

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

const Slider = styled.span<SliderProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isToggled ? "#BBDEFB" : "#c2c2c2")};
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  input:focus {
    box-shadow: 0 0 1px;
  }

  :before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    left: 4px;
    bottom: 2.5px;
    background-color: ${(props) => (props.isToggled ? "#2196F3" : "#F5F5F5")};
    -webkit-transition: 0.3s;
    transition: 0.3s;
    border-radius: 50%;

    -webkit-transform: ${(props) => props.isToggled && "translateX(22px)"};
    -ms-transform: ${(props) => props.isToggled && `translateX(22px)`};
    transform: ${(props) => props.isToggled && `translateX(22px)`};
  }
`;

const HiddenInput = styled.input``;

export default Toggle;
