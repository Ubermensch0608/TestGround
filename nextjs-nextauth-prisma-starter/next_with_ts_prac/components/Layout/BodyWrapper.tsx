import React from 'react';
import styled from 'styled-components';

const BodyWrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 50px;
`;

export default BodyWrapper;
