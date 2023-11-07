import { Button, Image } from "react-bootstrap";
import styled from "styled-components";

export const CloseButton = styled(Button)`
  background-color: #f44336;
  border-color: #f44336;
  border-radius: 5px;
  padding: 0.5em 1em;
  font-size: 1.2em;
  font-weight: bold;
  width: 7em;

  &:hover {
    background-color: red;
    border-color: red;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
    width: 5em;
  }
`; // close button style

export const ModalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`; // modal image style
