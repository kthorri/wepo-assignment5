import React from 'react';
import PropTypes from 'prop-types';
import {modalOverlay, modal, modalClose, modalTitle, modalBody, modalFooter, hidden} from './modal.css';

// Receives props to be able to determine if the modal is hidden or not
// As well as providing a function to close the modal when clicking the x button.
//

const Modal = props => {
  return (
    <div className={`${modalOverlay} ${props.isOpen ? '' : hidden}`}>
      <div className={modal}>
        <div className={modalClose} onClick={props.onClose}>
          x
        </div>
        {props.children}
      </div>
    </div>
  );
};

Modal.Title = props => <div className={modalTitle}>{props.children}</div>;
Modal.Body = props => <div className={modalBody}>{props.children}</div>;
Modal.Footer = props => <div className={modalFooter}>{props.children}</div>;

Modal.propTypes = {
  // Boolean that is parsed to the component to determine if the
  isOpen: PropTypes.bool.isRequired,
  // Function called to close the modal
  onClose: PropTypes.func.isRequired,
  // Children rendered within the modal
  children: PropTypes.node,
};

export default Modal;
