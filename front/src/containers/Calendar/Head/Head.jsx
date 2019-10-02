import React, { useCallback } from "react";
import format from "date-fns/format";
import subMonths from "date-fns/subMonths";
import addMonths from "date-fns/addMonths";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd";

import { Wrapper, Left, Right, Date, Mode } from "./style";

import { MODIFY_CURRENT_DATE, CHANGE_MODE } from "../../../../reducer/schedule";

const Header = () => {
  const { currentDate, mode } = useSelector(state => state.schedules);
  const date = currentDate && format(currentDate, "MMMM yyyy ");
  const dispatch = useDispatch();

  const onPreMonth = useCallback(() => {
    dispatch({
      type: MODIFY_CURRENT_DATE,
      data: subMonths(currentDate, 1)
    });
  }, [currentDate]);

  const onNextMonth = useCallback(() => {
    dispatch({
      type: MODIFY_CURRENT_DATE,
      data: addMonths(currentDate, 1)
    });
  }, [currentDate]); // currentDate 안넣어주면 처음 rendering될 때 한번만 함수가 생성되서 그때의 currentDate=null이게 됨...

  const onChangeMode = useCallback(() => {
    const newMode = mode === "day" ? "month" : "day";
    dispatch({
      type: CHANGE_MODE,
      data: newMode
    });
  }, [mode]);
  return (
    <Wrapper>
      <Left type="left" onClick={onPreMonth} />
      <Date>{date}</Date>
      <Right type="right" onClick={onNextMonth} />
      <Mode>
        <Button
          type={mode === "day" ? "primary" : "dashed"}
          onClick={onChangeMode}
        >
          day
        </Button>
        <Button
          type={mode === "month" ? "primary" : "dashed"}
          onClick={onChangeMode}
        >
          month
        </Button>
      </Mode>
    </Wrapper>
  );
};

export default Header;
