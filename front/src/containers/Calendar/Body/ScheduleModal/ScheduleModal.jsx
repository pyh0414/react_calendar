import React, { useState, useCallback, useEffect } from "react";
import {
  Modal,
  Button,
  Radio,
  Input,
  DatePicker,
  TimePicker,
  message
} from "antd";
import moment from "moment";
import getUnixTime from "date-fns/getUnixTime";
import { useDispatch, useSelector } from "react-redux";

import { MAKE_SCHEDULE_REQUEST } from "../../../../../reducer/schedule";

const ScheduleModal = ({ setmodalVisibleProps, day }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [period, setPeriod] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const dispatch = useDispatch();

  const { currentDate } = useSelector(state => state.schedules);
  const onHandleCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onHandleOk = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onHandleSubmit = useCallback(() => {
    if (title.trim() == "") {
      return message.error("일정 제목을 입력해 주세요 !!");
    }
    if (content.trim() == "") {
      return message.error("일정 내용을 입력해 주세요 !!");
    }
    if (startDate == "" || endDate == "") {
      if (period != 1) {
        return message.error("시간정보를 입력해 주세요 !!");
      }
    }

    if (startTime == "" || endTime == "") {
      if (period != 4) {
        return message.error("시간정보를 입력해 주세요 !!");
      }
    }

    const splitedStartDate = startDate.split("-");
    const startYear = splitedStartDate[0] || currentDate.getFullYear();
    const startMonth = splitedStartDate[1] || currentDate.getMonth() + 1;
    const startDay = splitedStartDate[2] || currentDate.getDate();
    const startTimeHour = startTime[0] || 0;
    const startTimeMin = startTime[1] || 0;

    const splitedEndDate = endDate.split("-");
    const endYear = splitedEndDate[0] || currentDate.getFullYear();
    const endMonth = splitedEndDate[1] || currentDate.getMonth() + 1;
    const endDay = splitedEndDate[2] || currentDate.getDate();
    const endTimeHour = endTime[0] || 23;
    const endTimeMin = endTime[1] || 59;

    const start =
      getUnixTime(
        new Date(
          startYear,
          startMonth - 1,
          startDay,
          startTimeHour,
          startTimeMin
        )
      ) * 1000;
    const end =
      getUnixTime(
        new Date(endYear, endMonth - 1, endDay, endTimeHour, endTimeMin)
      ) * 1000;

    const data = { title, content, period, start, end };

    dispatch({
      type: MAKE_SCHEDULE_REQUEST,
      data
    });

    setModalVisible(false);
  });

  const onHandleTitle = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onHandleContent = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const onHandlePeriod = useCallback(e => {
    setPeriod(e.target.value);
  }, []);

  const onHandleStartDate = useCallback(
    (date, dateString) => {
      setStartDate(dateString);
    },
    [startDate]
  );

  const onHandleEndDate = useCallback(
    (date, dateString) => {
      setEndDate(dateString);
    },
    [endDate]
  );
  const onHandleStartTime = useCallback(
    time => {
      const data = [];
      data[0] = time.hour();
      data[1] = time.minute();
      setStartTime(data);
    },
    [startTime]
  );

  const onHandleEndTime = useCallback(
    time => {
      const data = [];
      data[0] = time.hour();
      data[1] = time.minute();

      setEndTime(data);
    },
    [endTime]
  );

  useEffect(() => {
    return () => {
      setModalVisible(true);
      setmodalVisibleProps(false);
    };
  }, [modalVisible]);

  return (
    <>
      <Modal
        title="일정 등록하기"
        visible={modalVisible}
        onOk={onHandleOk}
        cancelText="취소"
        onCancel={onHandleCancel}
        footer={[
          <Button type="primary" onClick={onHandleSubmit} key={Math.random()}>
            일정등록
          </Button>,
          <Button type="danger" onClick={onHandleCancel} key={Math.random()}>
            취소
          </Button>
        ]}
      >
        <div>
          <Input
            placeholder="어떤 일정인가요 ?"
            value={title}
            onChange={onHandleTitle}
          />
        </div>
        <br />
        <div>
          <Input.TextArea
            maxLength={140}
            placeholder="일정에 대해서 설명해주세요 ! "
            value={content}
            onChange={onHandleContent}
          />
        </div>
        <br />
        <Radio.Group onChange={onHandlePeriod} value={period}>
          <Radio value={4}>하루종일</Radio>
        </Radio.Group>
        <br />
        <br />
        <DatePicker
          disabled={period == 1 ? true : false}
          size={10}
          placeholder="시작 날짜"
          onChange={onHandleStartDate}
        />
        &emsp;
        <TimePicker
          disabled={period == 4 ? true : false}
          placeholder="시작 시간"
          onChange={onHandleStartTime}
          defaultOpenValue={moment("00:00:00", "HH:mm")}
          format={"HH:mm"}
        />
        <br />
        <br />
        <DatePicker
          disabled={period == 1 ? true : false}
          size={10}
          placeholder="종료 날짜"
          onChange={onHandleEndDate}
        />
        &emsp;
        <TimePicker
          disabled={period == 4 ? true : false}
          placeholder="종료 시간"
          onChange={onHandleEndTime}
          defaultOpenValue={moment("00:00:00", "HH:mm")}
          format={"HH:mm"}
        />
      </Modal>
    </>
  );
};

export default ScheduleModal;
