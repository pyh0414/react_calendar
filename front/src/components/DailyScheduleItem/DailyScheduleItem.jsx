import React from "react";
import { Popover } from "antd";
import { useSelector } from "react-redux";

import { Item } from "./style";

const DailyScheduleItem = ({ data }) => {
  const { start, end, title, content, colorCode, id } = data;

  const { mode } = useSelector(state => state.schedules);
  const isMultipleDay =
    mode === "day" && new Date(end).getDate() - new Date(start).getDate() > 0;

  const info = (
    <div>
      <div>
        <span>{`${start}  ~  ${end}`}</span>
      </div>

      <div>
        <span>{title}</span>
      </div>
      <div>
        <span>{content}</span>
      </div>
    </div>
  );
  return (
    <div>
      <Popover content={info} trigger="hover" key={id}>
        <Item colorCode={colorCode}>
          {isMultipleDay && (
            <span style={{ color: "white", marginLeft: "5px" }}>하루 종일</span>
          )}
        </Item>
      </Popover>
    </div>
  );
};

export default DailyScheduleItem;
