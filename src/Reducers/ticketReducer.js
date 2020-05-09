import { FETCH_TICKET, UPDATE_TICKET } from "../Actions/ticketActions";
const initialState = null;

export default function ticketReducer(state = initialState, action) {
  //console.log(action);
  switch (action.type) {
    case FETCH_TICKET: {
      console.log(action.payload);
      return { ticket: action.payload };
    }
    case UPDATE_TICKET:
      const newState = state.map(ticket => {
        const condition = ticket.id === action.payload.id;

        if (condition) {
          return action.payload;
        }

        return ticket;
      });
      return newState;
    default: {
      return state;
    }
  }
}
