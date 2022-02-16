import React from 'react';
import styled from 'styled-components';

const BodyWrapper: React.FC = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  margin: 100px 50px;
`;

export default BodyWrapper;
