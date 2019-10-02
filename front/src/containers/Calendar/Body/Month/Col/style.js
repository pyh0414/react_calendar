import styled from "styled-components";

export const Wrapper = styled.div`
  width: calc(100% / 7);
  position: relative;
  height: 7em;
  border-right: 1px solid #f2f2f2;
  font-weight: 700;
  cursor: ${props => props.sameMonth && "pointer"};
  color: ${props => (props.sameMonth ? "black" : "#D8D8D8")};
  padding-top: 0.5em;
  padding-left: 0.5em;

  :last-child {
    border-right: none;
  }
`;
