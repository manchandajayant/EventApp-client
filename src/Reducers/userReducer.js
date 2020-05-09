import { USER_FETCHED } from "../Actions/userActions";
const initialState = { fetchedUser: null };

export default function userReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case USER_FETCHED: {
      return { fetchedUser: action.payload };
    }

    default: {
      return state;
    }
  }
}
