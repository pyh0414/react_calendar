import produce from "immer";

export const initialState = {
  currentDate: null,
  selectedDate: null,
  mode: "month",
  schedules: [],
  makeScheduleResult: true,
  makeScheduleFinished: false,
  makeScheduleResultMessage: ""
};

export const INITIALIZE_CURRENT_DATE = "INITIALIZE_CURRENT_DATE";
export const MODIFY_CURRENT_DATE = "MODIFY_CURRENT_DATE";
export const MODIFY_SELECTED_DATE = "MODIFY_SELECTED_DATE";
export const CHANGE_MODE = "CHANGE_MODE";

export const MAKE_SCHEDULE_REQUEST = "MAKE_SCHEDULE_REQUEST";
export const MAKE_SCHEDULE_SUCCESS = "MAKE_SCHEDULE_SUCCESS";
export const MAKE_SCHEDULE_FAILURE = "MAKE_SCHEDULE_FAILURE";

export const LOAD_SCHEDULES_REQUEST = "LOAD_SCHEDULES_REQUEST";
export const LOAD_SCHEDULES_SUCCESS = "LOAD_SCHEDULES_SUCCESS";
export const LOAD_SCHEDULES_FAILURE = "LOAD_SCHEDULES_FAILURE";

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case INITIALIZE_CURRENT_DATE: {
        draft.currentDate = action.data;
        break;
      }
      case MODIFY_CURRENT_DATE: {
        draft.currentDate = action.data;
        break;
      }

      case MODIFY_SELECTED_DATE: {
        draft.selectedDate = action.data;
        break;
      }

      case CHANGE_MODE: {
        draft.mode = action.data;
        break;
      }

      case MAKE_SCHEDULE_REQUEST: {
        draft.makeScheduleFinished = false;
        draft.makeScheduleResult = false;
        draft.makeScheduleResultMessage = "";
        break;
      }

      case MAKE_SCHEDULE_SUCCESS: {
        draft.schedules.push(action.data);
        draft.makeScheduleFinished = true;
        draft.makeScheduleResult = true;
        draft.makeScheduleResultMessage = "일정이 추가되었습니다.";
        break;
      }

      case MAKE_SCHEDULE_FAILURE: {
        draft.makeScheduleFinished = true;
        draft.makeScheduleResult = false;
        draft.makeScheduleResultMessage = "일장 추가에 실패하였습니다.";
        break;
      }

      case LOAD_SCHEDULES_SUCCESS: {
        draft.schedules = action.data;
        break;
      }
    }
  });
};
