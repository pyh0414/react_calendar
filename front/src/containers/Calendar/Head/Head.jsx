import React, { useCallback } from "react";
import format from "date-fns/format";
import subMonths from "date-fns/subMonths";
import addMonths from "date-fns/addMonths";
import { useSelector, useDispatch } from "react-redux";
import { message } from "antd";

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
  }, [currentDate]);

  const onChangeMonthFail = useCallback(() => {
    return message.error("day 모드에서는 날짜를 조작할 수 없습니다");
  }, []);

  return (
    <Wrapper>
      <Left
        type="left"
        onClick={mode === "month" ? onPreMonth : onChangeMonthFail}
      />
      <Date>{date}</Date>
      <Right
        type="right"
        onClick={mode === "month" ? onNextMonth : onChangeMonthFail}
      />
    </Wrapper>
  );
};

export default Header;
