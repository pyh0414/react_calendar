import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0.5em;
  padding: 0.5em;
`;

export const Item = styled.div`
  margin-top: 3px;
  height: 20px;
  background-color: ${props => props.colorCode};
`;
