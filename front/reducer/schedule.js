import produce from "immer";

export const initialState = {
  currentDate: null,
  mode: "month",
  schedules: []
};

export const INITIALIZE_CURRENT_DATE = "INITIALIZE_CURRENT_DATE";
export const MODIFY_CURRENT_DATE = "MODIFY_CURRENT_DATE";
export const CHANGE_MODE = "CHANGE_MODE";

export const MAKE_SCHEDULE_REQUEST = "MAKE_SCHEDULE_REQUEST";
export const MAKE_SCHEDULE_SUCCESS = "MAKE_SCHEDULE_SUCCESS";
export const MAKE_SCHEDULE_FAILURE = "MAKE_SCHEDULE_FAILURE";

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
      case CHANGE_MODE: {
        draft.mode = action.data;
        break;
      }
      case MAKE_SCHEDULE_SUCCESS: {
        draft.schedules.push(action.data);
        break;
      }
    }
  });
};
