import { Image } from "react-bootstrap";
import styled from "styled-components";

export const IMAGE = styled(Image)`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`; // image style

export const LoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`; // loader div style

export const MainContent = styled.div`
  margin-top: 200px;
  @media (max-width: 768px) {
    margin-top: 150px;
  }
`; // main content style