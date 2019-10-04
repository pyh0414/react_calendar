import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Schedule from "../../../../components/DailyScheduleItem";

const Day = () => {
  const { schedules, selectedDate, mode } = useSelector(
    state => state.schedules
  );

  console.log(selectedDate);

  return <div>asd</div>;
};

export default Day;
