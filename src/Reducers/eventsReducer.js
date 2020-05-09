import { EVENTS_FETCHED, NEW_EVENT } from "../Actions/eventActions";
const initialState = [];

export default function eventsReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case EVENTS_FETCHED: {
      return action.payload;
    }
    case NEW_EVENT: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
