import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef(null);

  const animation = useSpring({
    config: { duration: 250 },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-indx: 10;
    border-radius: 10px;
  `;

  const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
  `;

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;

    p {
      margin-bottom: 1rm;
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

  const CloseModal = (e) => {
    if (modalRef.current === e.target) setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Background ref={modalRef} onClick={CloseModal}>
          <animated.div style={animation}>
            <ModalWrapper
              showModal={showModal}
              onBlur={() => setShowModal(false)}
            >
              <ModalImage src={"/images/cell_slider_desktop.jpg"} alt="cell" />
              <ModalContent>
                <h1>are you read?</h1>
                <p>Get exclusive access to our next launch</p>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalButton
                aria-label={"Close modal"}
                onClick={() => setShowModal(!showModal)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      )}
    </>
  );
};
