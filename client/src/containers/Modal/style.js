import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(48, 49, 48, .8);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  width: 90vw;
  max-width: 500px;
  max-height: 25vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 1rem;
  background-color: rgb(28, 28, 28);
  outline: 0;
  z-index: 1050;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: grid;
  grid-template-columns: auto 3rem;
  margin-bottom: 1.5rem;
`;

export const ModalTitle = styled.h3`
  margin: 0 auto;
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(255, 255, 255, .8);
`;

export const ModalCloseBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 700;
  position: relative;
  color: rgba(255, 255, 255, .8);
  outline: none;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 15vh;
  align-items: stretch;
  justify-content: space-around;
`;
