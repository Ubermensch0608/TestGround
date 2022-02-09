import Button from "layout/Button";
import { ModalContentProps } from "models/model";
import { useState } from "react";
import styled from "styled-components";

const MyModal = () => {
  const [isDark, setIsDark] = useState(false);

  const openModalHandler = () => {
    setIsDark(true);
  };
  const closeModalHandler = () => {
    setIsDark(false);
  };

  return (
    <div>
      <h3>Modal</h3>
      <ModalOverlay isDark={isDark}></ModalOverlay>

      <ModalWrapper isDark={isDark}>
        <ModalContent>
          <CloseBtn onClick={closeModalHandler}>X</CloseBtn>
          <ModalText>HELLO CODESTATES!</ModalText>
        </ModalContent>
      </ModalWrapper>

      <Button onClick={openModalHandler}>Open Modal</Button>
    </div>
  );
};

const ModalWrapper = styled.div<{ isDark: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.isDark ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #f5f5f5;
  border-radius: 10px;
  width: 250px;
  height: 120px;
  padding: 15px;
  border: 2px solid #2196f3;

  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  top: 40%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const CloseBtn = styled.button<ModalContentProps>`
  border-radius: 50%;
  border: 1px solid #2196f3;
  width: 24px;
  height: 24px;
  padding: 2px;
  background: #bbdefb;
`;

const ModalText = styled.p`
  margin-top: 12px;
`;

const ModalOverlay = styled.div<{ isDark: boolean }>`
  box-sizing: border-box;
  display: ${(props) => (props.isDark ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;
export default MyModal;
