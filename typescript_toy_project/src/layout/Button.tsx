import { ButtonProps } from "models/model";
import React from "react";
import styled from "styled-components";

const Button: React.FC<ButtonProps> = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  background: #2196f3;
  color: #f5f5f5;
  font-size: 18px;
  border: 3px solid #bbdefb;
  border-radius: 40px;
  padding: 15px 25px;
  cursor: pointer;

  :active {
    border: 3px solid #2196f3;
    background: #bbdefb;
  }
`;

export default Button;
