import React, { useState } from "react";
import format from "date-fns/format";
import { useSelector } from "react-redux";

import { Wrapper } from "./style";

import ScheduleModal from "../ScheduleModal";
const Col = props => {
  const [modalVisible, setmodalVisible] = useState(false);

  const { day, sameMonth } = props;
  const formattedDay = format(day, "d");
  return (
    <Wrapper
      sameMonth={sameMonth}
      onClick={() => {
        setmodalVisible(true);
      }}
    >
      <div>{formattedDay}</div>
      {sameMonth && modalVisible && (
        <ScheduleModal setmodalVisibleProps={setmodalVisible} />
      )}
    </Wrapper>
  );
};
export default Col;
