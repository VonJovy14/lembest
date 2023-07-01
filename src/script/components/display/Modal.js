import React from "react";

import "stylesheets/components/display/modal.scss";

import Container from "script/components/display/Container";

const Modal = ({ children, open, onModalClose }) => {
  return (
    <div className={"modal-container " + (open ? "modal-open" : "modal-close")}>
      <div className="modal-wrapper position-center">
        <Container variant="background" color="white">
          {children}
        </Container>
      </div>

      <div className="modal-masking" onClick={() => onModalClose()}></div>
    </div>
  );
};

export default Modal;
