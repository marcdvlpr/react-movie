import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import {
  ModalBackdrop,
  ModalWrapper,
  ModalHeader,
  ModalTitle,
  ModalCloseBtn
} from './style';

const Modal = ({ children, isShowing, hide, title }) => {
  return isShowing
    ? createPortal(
        <>
          <ModalBackdrop onClick={hide} />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role='dialog'>
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <ModalCloseBtn
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                  onClick={() => hide()}
                >
                  &times;
                </ModalCloseBtn>
              </ModalHeader>
              {children}
          </ModalWrapper>
        </>,
        document.body
      )
    : null;
};

Modal.propTypes = {
  isShowing: PropTypes.bool,
  hide: PropTypes.func,
  title: PropTypes.string
};

export default Modal;
