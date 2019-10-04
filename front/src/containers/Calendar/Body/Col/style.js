import styled from "styled-components";
import { Icon } from "antd";

export const Wrapper = styled.div`
  width: calc(100% / 7);
  position: relative;
  height: 7em;
  border-right: 1px solid #a4a4a4;
  /* cursor: ${props => props.sameMonth && "pointer"}; */
  color: ${props => (props.sameMonth ? "black" : "#a4a4a4")};
  padding-top: 0.5em;

  :last-child {
    border-right: none;
  }
`;

export const Header = styled.div`
  display: flex;
  padding-left: 0.5em;
`;

export const DaySchedule = styled(Icon)``;
