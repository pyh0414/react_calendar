import styled from "styled-components";
import { Icon, Button } from "antd";

const ButtonGroup = Button.Group;

export const Wrapper = styled.div`
  display: flex;
  padding: 1.5em;
  border-bottom: 1px solid #a4a4a4;
  text-align: center;
`;

export const Left = styled(Icon)`
  justify-content: flex-start;
  flex-grow: 1;
  text-align: right;
  font-size: 30px;
`;

export const Date = styled.div`
  justify-content: center;
  flex-grow: 1;
  text-align: center;
  font-size: 25px;
`;

export const Right = styled(Icon)`
  justify-content: flex-start;
  flex-grow: 1;
  text-align: right;
  font-size: 30px;
`;

export const Mode = styled(ButtonGroup)`
  justify-content: flex-start;
  flex-grow: 1;
  text-align: right;
  font-size: 30px;
`;
