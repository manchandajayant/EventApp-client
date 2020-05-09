import { EVENT_FETCHED } from "../Actions/eventActions";
const initialState = null;

export default function eventReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case EVENT_FETCHED: {
      //console.log("new", action.payload);
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
