import request from "superagent";

export const NEW_TICKET = "NEW_TICKET";
export const FETCH_TICKET = "FETCH_TICKET";
export const TICKETS_FETCHED = "TICKETS_FETCHED";
export const UPDATE_TICKET = "UPDATE_TICKET";

const baseUrl = "http://localhost:4000";

const newTicketCreated = ticket => ({
  type: NEW_TICKET,
  payload: ticket
});

export const newTicket = data => (dispatch, getState) => {
  const state = getState();
  const { users } = state;
  request
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${users.auth}`)
    .send(data)
    .then(res => {
      const action = newTicketCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

const singleTicket = ticket => ({
  type: FETCH_TICKET,
  payload: ticket
});

export const fetchTicket = id => (dispatch, getState) => {
  request
    .get(`${baseUrl}/ticket/${id}`)
    .send(id)
    .then(res => {
      console.log(res.body);
      const action = singleTicket(res.body);
      dispatch(action);
      // console.log("in action", res.body);
    })
    .catch(console.error);
};

const allTicketsFetched = events => ({
  type: TICKETS_FETCHED,
  payload: events
});

export const showAllTickets = () => dispatch => {
  request(`${baseUrl}/ticket`)
    .then(res => {
      const action = allTicketsFetched(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const ticketUpdated = id => {
  return {
    type: UPDATE_TICKET,
    payload: id
  };
};

export const updateTicket = (id, data) => (dispatch, getState) => {
  console.log("UPDATE EVENT ACTION", data);
  request
    .put(`${baseUrl}/event/${id}`)
    .send(data)
    .then(res => {
      const action = ticketUpdated(res.body);
      // console.log("PATCH RESPONSE", res.body);
      dispatch(action);
    })
    .catch(console.error);
};
