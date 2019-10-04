import React from "react";
import { useSelector } from "react-redux";
import startOfWeek from "date-fns/startOfWeek";
import startOfMonth from "date-fns/startOfMonth";
import addDays from "date-fns/addDays";
import isSameMonth from "date-fns/isSameMonth";
import { endOfMonth } from "date-fns/esm";

import { WeekDayRow, MonthDayRow } from "./style";
import WeekDayCol from "../../../../components/WeekDayItem";
import MonthDayCol from "../Col";

const Month = () => {
  const { currentDate } = useSelector(state => state.schedules);

  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const renderWeekDays = () => {
    let rows = [];
    dayOfWeek.map((v, i) => {
      rows.push(<WeekDayCol key={i} day={v} />);
    });
    return rows;
  };

  const renderMonthDays = () => {
    const startMonth = startOfMonth(currentDate);
    const startDate = startOfWeek(currentDate);
    const endDate = endOfMonth(currentDate);

    let rows = [];
    let cols = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        cols.push(
          <MonthDayCol
            key={day}
            day={day}
            sameMonth={isSameMonth(day, startMonth) ? true : false}
          />
        );
        day = addDays(day, 1);
      }

      rows.push(<MonthDayRow key={day}>{cols}</MonthDayRow>);
      cols = [];
    }
    return <>{rows}</>;
  };

  return (
    <div>
      <WeekDayRow>{renderWeekDays()}</WeekDayRow>
      <MonthDayRow>{renderMonthDays()}</MonthDayRow>
    </div>
  );
};

export default Month;
