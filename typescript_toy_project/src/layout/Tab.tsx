import { TabProps } from "models/model";
import React from "react";
import styled from "styled-components";

const Tab: React.FC<TabProps> = (props) => {
  console.log(props.clickedTab, props.id);
  return (
    <StyledTab
      id={props.id}
      onClick={props.onClick}
      clickedTab={props.clickedTab}
    >
      {props.children}
    </StyledTab>
  );
};

const StyledTab = styled.div<{ clickedTab: string }>`
  display: flex;
  align-items: center;
  width: 180px;
  cursor: pointer;
  padding-left: 10px;
  color: ${(props) => props.id === props.clickedTab && "#fff"};
  background: ${(props) => props.id === props.clickedTab && "#2196f3"};
`;

export default Tab;
