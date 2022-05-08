import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderLayout>
      <TopNav>
        <Link href={'/'}>홈</Link>
        <Link href={'/memo-list'}>메모장</Link>
        <Link href={'/new-memo'}>작성하기</Link>
      </TopNav>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: tomato;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  padding: 20px 50px;
`;

const TopNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 30%;
  margin: 0 100px;
`;
export default Header;
