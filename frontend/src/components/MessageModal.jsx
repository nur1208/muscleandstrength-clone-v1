import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { useRef } from "react";
import { useEffect } from "react";

export const MessageModal = ({
  showModal,
  setShowModal,
  title,
  message,
  titleColor,
  timeOut,
}) => {
  const modalRef = useRef(null);

  const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 300;
  `;

  const ModalWrapper = styled.div`
    width: 500px;
    height: 180px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 310;
    border-radius: 10px;
  `;

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    h1 {
      color: ${titleColor === "red" ? "#d41313" : "#079c3a"};
    }

    p {
      margin-bottom: 1rem;
      font-size: 18px;
    }

    button {
      padding: 10px 24px;
      background: #141414;
      color: #fff;
      border: none;
    }
  `;

  const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
  `;

  const closeModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  // useEffect(() => {
  //   if (timeOut) {
  //     const time = setTimeout(() => {
  //       setShowModal(false);
  //     }, timeOut);
  //     return () => {
  //       clearTimeout(time);
  //     };
  //   }
  // }, [setShowModal, timeOut]);

  if (timeOut) {
    setTimeout(() => {
      setShowModal(false);
    }, timeOut);
  }

  return (
    <>
      {showModal && (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper
            showModal={showModal}
            onBlur={() => setShowModal(false)}
          >
            <ModalContent>
              <h1>{title}</h1>
              <p>{message}</p>
            </ModalContent>
            <CloseModalButton
              aria-label={"Close modal"}
              onClick={() => setShowModal(!showModal)}
            />
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};
