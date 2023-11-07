import React from "react";
import { Modal } from "react-bootstrap";
import { CloseButton, ModalImage } from "./ModalStyles";

const ImageModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.onHide()} size="lg" centered>
      <Modal.Body>
        <ModalImage
          src={`https://live.staticflickr.com/${props.photo.server}/${props.photo.id}_${props.photo.secret}.jpg`}
          alt={props.photo.title}
        />
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <CloseButton onClick={() => props.onHide()}>Close</CloseButton>
      </Modal.Footer>
    </Modal>
  );
};

export default ImageModal;
