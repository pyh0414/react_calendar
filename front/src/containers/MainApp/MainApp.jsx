import React from "react";
import { Wrapper, Calendar } from "./style.js";

import Head from "../Calendar/Head";
import Body from "../Calendar/Body";

const MainAp = () => {
  return (
    <Wrapper>
      <Calendar>
        <Head />
        <Body />
      </Calendar>
    </Wrapper>
  );
};

export default MainAp;
