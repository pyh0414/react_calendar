import React, { useCallback } from "react";
import format from "date-fns/format";

import { useSelector, useDispatch } from "react-redux";
import { isAfter } from "date-fns";
import { isBefore } from "date-fns";
import { isSameDay } from "date-fns";

import { Wrapper, CustomIcon } from "./style";
import { CHANGE_MODE } from "../../../../../reducer/schedule";
import generateColor from "../../../../../util/generateColor";
import DailyScheduleItem from "../../../../components/DailyScheduleItem";

const Day = () => {
  const { schedules, mode, selectedDate } = useSelector(
    state => state.schedules
  );
  const dispatch = useDispatch();

  const day = selectedDate;

  const renderDailySchedules = () => {
    const dailySchedules = [];
    schedules.forEach(n => {
      const startDate = new Date(n.start_time);
      const endDate = new Date(n.end_time);

      const isBeforeStart = isBefore(startDate, day);
      const isAfterStart = isAfter(endDate, day);

      const isStartSameDay = isSameDay(startDate, day);
      const isEndSameDay = isSameDay(endDate, day);

      if (isStartSameDay || (isEndSameDay || (isBeforeStart && isAfterStart))) {
        const start = format(startDate, "yyyy-MM-dd HH:mm");
        const end = format(endDate, "yyyy-MM-dd HH:mm");

        const title = n.title;
        const content = n.content;
        const colorCode = generateColor(n.id);
        const id = n.id;
        const data = {
          start,
          end,
          title,
          content,
          colorCode,
          id
        };

        dailySchedules.push(
          <div style={{ margin: "1em" }} key={id}>
            <DailyScheduleItem data={data} />
          </div>
        );
        return;
      }
    });

    return dailySchedules.length > 0 ? (
      dailySchedules
    ) : (
      <div>
        <CustomIcon type="frown" style={{ marginRight: "5px" }} />
        일정이 존재하지 않습니다.
      </div>
    );
  };

  const onChangeMode = useCallback(() => {
    const newMode = mode === "day" ? "month" : "day";
    dispatch({
      type: CHANGE_MODE,
      data: newMode
    });
  }, [mode]);

  return (
    <Wrapper>
      {renderDailySchedules()}

      <CustomIcon
        type="arrow-left"
        style={{ fontSize: "20px", color: "#08c" }}
        onClick={onChangeMode}
      />
    </Wrapper>
  );
};

export default Day;
