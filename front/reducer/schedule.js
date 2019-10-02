import produce from "immer";

export const initialState = {
  currentDate: null,
  mode: "month"
};

export const INITIALIZE_CURRENT_DATE = "INITIALIZE_CURRENT_DATE";
export const MODIFY_CURRENT_DATE = "MODIFY_CURRENT_DATE";
export const CHANGE_MODE = "CHANGE_MODE";

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
    }
  });
};
