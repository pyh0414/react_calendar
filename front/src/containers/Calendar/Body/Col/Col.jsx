import React, { useState, useCallback } from "react";
import format from "date-fns/format";
import { useSelector, useDispatch } from "react-redux";
import { isAfter } from "date-fns";
import { isBefore } from "date-fns";
import { isSameDay } from "date-fns";
import { Icon } from "antd";

import { Wrapper, Header } from "./style";
import {
  MODIFY_SELECTED_DATE,
  CHANGE_MODE
} from "../../../../../reducer/schedule";
import ScheduleModal from "../ScheduleModal";
import generateColor from "../../../../../util/generateColor.js";
import DailyScheduleItem from "../../../../components/DailyScheduleItem";

const Col = props => {
  const [modalVisible, setmodalVisible] = useState(false);
  const { schedules, selectedDate, mode } = useSelector(
    state => state.schedules
  );
  const { day, sameMonth } = props;

  const dispatch = useDispatch();

  const modifySelectedDate = useCallback(() => {
    dispatch({
      type: MODIFY_SELECTED_DATE,
      data: day
    });
    setmodalVisible(true);
  }, [selectedDate]);

  const onChangeMode = useCallback(() => {
    const newMode = mode === "day" ? "month" : "day";
    dispatch({
      type: CHANGE_MODE,
      data: newMode
    });
    dispatch({
      type: MODIFY_SELECTED_DATE,
      data: day
    });
  }, [mode]);

  const sameDate =
    selectedDate &&
    selectedDate.getFullYear() === day.getFullYear() &&
    selectedDate.getMonth() === day.getMonth() &&
    selectedDate.getDate() === day.getDate()
      ? true
      : false;

  const renderSchedules = useCallback(() => {
    const mySchedules = [];

    schedules.forEach(n => {
      // 1 : 매 일 , 2 : 매 월, 3 : 매 주 , 4 : 하루종일
      const startDate = new Date(n.start_time);
      const endDate = new Date(n.end_time);

      const isBeforeStart = isBefore(startDate, day);
      const isAfterStart = isAfter(endDate, day);

      const isStartSameDay = isSameDay(startDate, day);
      const isEndSameDay = isSameDay(endDate, day);

      if (isStartSameDay || isEndSameDay || (isBeforeStart && isAfterStart)) {
        const start = format(startDate, "yyyy-MM-dd HH:mm");
        const end = format(endDate, "yyyy-MM-dd HH:mm");

        const colorCode = generateColor(n.id);

        const title = n.title;
        const content = n.content;
        const id = n.id;
        const data = { start, end, title, content, colorCode, id };
        mySchedules.push(<DailyScheduleItem data={data} key={id} />);
        return;
      }
    });

    return <>{mySchedules}</>;
  });

  const formattedDay = format(day, "d");
  return (
    <Wrapper sameMonth={sameMonth}>
      <Header>
        <div style={{ cursor: "pointer" }} onClick={modifySelectedDate}>
          {formattedDay}
        </div>
        {sameMonth && (
          <div
            style={{
              marginLeft: "auto",
              marginRight: "3px",
              cursor: "pointer"
            }}
            onClick={onChangeMode}
          >
            <Icon type="schedule" />
          </div>
        )}
      </Header>

      {renderSchedules()}

      {sameMonth && modalVisible && (
        <ScheduleModal setmodalVisibleProps={setmodalVisible} day={day} />
      )}
    </Wrapper>
  );
};
export default Col;
