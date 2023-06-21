import React from "react";

import "stylesheets/components/display/modalcontainer.scss";

const Modal = ({ children, onClose, display }) => {
  // return (
  //   <div className={"modal-container modal-" + (display ? "show" : "hide")}>
  //     <div className="modal-background" onClick={() => onClose()}></div>

  //     <div className="modal-wrapper center-middle-container">{children}</div>
  //   </div>
  // );

  return (
    <div
      className={"modal-container modal-" + (display ? "show" : "hide")}
      onClick={() => onClose()}
    >
      <div className="modal-wrapper">{children}</div>
    </div>
  );
};

export default Modal;
