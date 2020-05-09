import { TICKETS_FETCHED, NEW_TICKET } from "../Actions/ticketActions";
const initialState = [];

export default function ticketsReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case TICKETS_FETCHED: {
      return action.payload;
    }
    case NEW_TICKET: {
      return [...state, action.payload];
    }

    default: {
      return state;
    }
  }
}
