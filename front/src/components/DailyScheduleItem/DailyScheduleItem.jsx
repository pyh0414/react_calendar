import React from "react";
import { Popover } from "antd";

import { Item } from "./style";

const DailyScheduleItem = ({ data }) => {
  const { start, end, title, content, colorCode, id } = data;

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
        <Item colorCode={colorCode}></Item>
      </Popover>
    </div>
  );
};

export default DailyScheduleItem;
