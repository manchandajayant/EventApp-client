import { combineReducers } from "redux";
import events from "./eventsReducer";
import event from "./eventReducer";
import users from "./usersReducer";
import tickets from "./ticketsReducer";
import comments from "./commentsReducer";
import ticket from "./ticketReducer";
import user from "./userReducer";

export default combineReducers({
  events,
  users,
  event,
  tickets,
  comments,
  ticket,
  user
});
