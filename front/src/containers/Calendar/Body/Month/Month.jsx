import React from "react";

import { WeekDayRow } from "./style";
import WeekDayCol from "../../../../components/Calendar/Body/Month/WeekDay";

const Month = () => {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const weekDay = dayOfWeek.map((v, i) => {
    return <WeekDayCol key={i} day={v} />;
  });

  return (
    <div>
      <WeekDayRow>{weekDay}</WeekDayRow>
    </div>
  );
};

export default Month;
