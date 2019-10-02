import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Wrapper, Calendar } from "./style.js";

import Head from "../Calendar/Head";
import Body from "../Calendar/Body";

import { INITIALIZE_CURRENT_DATE } from "../../../reducer/schedule";

const MainAp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 마운트 될때만 실행
    dispatch({
      type: INITIALIZE_CURRENT_DATE,
      data: new Date()
    });
  }, []);

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
