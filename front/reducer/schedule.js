import produce from "immer";

export const initialState = {
  imagePaths: [],
  mainPosts: [],
  isAddingPost: false,
  addPostResult: false
};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (
      action.type
      //   case "UPLOAD_POST_IMAGE_SUCCESS": {
      //     action.data.forEach(v => {
      //       draft.imagePaths.push(v);
      //     });
      //     break;
      //   }
    ) {
    }
  });
};
