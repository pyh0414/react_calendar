import React from "react";
import { useSelector } from "react-redux";

import Month from "./Month";
import Day from "../Body/DailySchedule";

const Index = () => {
  const { mode } = useSelector(state => state.schedules);
  return <>{mode === "day" ? <Day /> : <Month />}</>;
};

export default Index;
