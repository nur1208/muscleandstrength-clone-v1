import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { MessageModal } from "../../MessageModal";
import { Modal } from "./Modal";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

export const AppPop2 = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container>
        <Button onClick={toggleModal}>I'm a Modal</Button>
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        <MessageModal
          showModal={showModal}
          setShowModal={setShowModal}
          titleColor="green"
          timeOut={7000}
          title="are you read?"
          message="Get exclusive access to our next launch"
        />
        <GlobalStyle />
      </Container>
    </>
  );
};
