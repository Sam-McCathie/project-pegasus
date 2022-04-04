import React from "react";
import "./NodeModal.scss";

const NodeModal = ({toggleModal}) => {
  // populates modal from clicked DOW
  return (
    <div className="calendar__modal__background">
      <div className="calendar__modal">
        <button onClick={() => toggleModal()}>X</button>
        <span>yello</span>
      </div>
    </div>
  );
};

export default NodeModal;
