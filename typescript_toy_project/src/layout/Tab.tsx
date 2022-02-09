import React from "react";
import styled from "styled-components";

const Tab: React.FC = (props) => {
  return <StyledTab>{props.children}</StyledTab>;
};

const StyledTab = styled.div``;

export default Tab;
