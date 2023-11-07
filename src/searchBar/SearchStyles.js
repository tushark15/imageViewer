import { Form } from "react-bootstrap";
import styled from "styled-components";
export const SearchBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  position: fixed;
  background: #141204;
  @media (max-width: 768px) {
    height: 3em;
  }
`; // search bar div style

export const SearchInput = styled(Form.Control)`
  width: 20em;
  margin-top: 1em;
  @media (max-width: 768px) {
    width: 10em;
    height: 2em;
    margin-top: 0.5em;
  }
`; // search input style

export const SearchHistoryDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5em;
  position: fixed;
  top: 5em;
  background: #141204;
  @media (max-width: 768px) {
    height: 5em;
    top: 3em;
  }
`; // search history div style

export const SearchHistoryInnerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1em;
  margin-bottom: 1em;
  margin-top: 1em;

  @media (max-width: 768px) {
    gap: 0.5em;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    justify-content: center;
  }
`; // search history inner div style

export const HistoryTabs = styled.div`
  font-size: 1em;
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`; // history tabs style
