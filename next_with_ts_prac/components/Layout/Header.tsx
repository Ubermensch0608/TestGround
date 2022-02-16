import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderLayout>
      <nav>
        <Link href={'/memo-list'}>메모장</Link>
      </nav>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  position: fixed;
  width: 100%;
  height: 10%;
  background-color: tomato;
  color: #fff;
  padding: 20px 50px;
`;

export default Header;
