import React from "react";
import { useSelector } from "react-redux";

import Day from "./Day";
import Month from "./Month";

const Body = () => {
  const { mode } = useSelector(state => state.schedules);
  return <>{mode === "day" ? <Day /> : <Month />}</>;
};

export default Body;
