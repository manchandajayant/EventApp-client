import { FETCH_COMMENTS, NEW_COMMENT } from "../Actions/commentActions";
const initialState = [];

export default function commentsReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_COMMENTS: {
      return action.payload;
    }
    case NEW_COMMENT: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
