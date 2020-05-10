import request from "superagent";
import superagent from "superagent";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const NEW_EVENT = "NEW_EVENT";

export const EVENT_FETCHED = "EVENT_FETCHED";

const baseUrl = "http://localhost:4000";

const allEventsFetched = (events) => ({
  type: EVENTS_FETCHED,
  payload: events,
});

export const showAllEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;

  if (!events.length) {
    request(`${baseUrl}/event`)
      .then((res) => {
        const action = allEventsFetched(res.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

const newEventCreated = (events) => ({
  type: NEW_EVENT,
  payload: events,
});

export const newEvent = (data) => (dispatch, getState) => {
  request
    .post(`${baseUrl}/event`)
    .send(data)
    .then((res) => {
      const action = newEventCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

const singleEvent = (event) => ({
  type: EVENT_FETCHED,
  payload: event,
});

// export const fetchEvent = (id) => (dispatch, getState) => {
//   request
//     .get(`${baseUrl}/event/${id}`)
//     .send(id)
//     .then((res) => {
//       //console.log(res.body);
//       const action = singleEvent(res.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };

export const fetchEvent = (id) => {
  return async function (dispatch) {
    try {
      const res = await superagent.get(`${baseUrl}/event/${id}`).send(id);
      const action = singleEvent(res.body);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};
