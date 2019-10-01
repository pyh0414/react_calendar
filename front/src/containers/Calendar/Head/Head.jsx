import React from "react";
import { Button } from "antd";
import { Wrapper, Left, Right, Date, Mode } from "./style";

const Header = () => {
  return (
    <Wrapper>
      <Left type="left" />
      <Date>2019.08.25</Date>
      <Right type="right" />
      <Mode>
        <Button type="dashed">day</Button>
        <Button type="dashed">month</Button>
      </Mode>
    </Wrapper>
  );
};

export default Header;
