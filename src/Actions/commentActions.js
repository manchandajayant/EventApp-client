import request from "superagent";

export const NEW_COMMENT = "NEW_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

const baseUrl = "http://localhost:4000";

const newCommentCreated = comment => ({
  type: NEW_COMMENT,
  payload: comment
});

export const newComment = data => (dispatch, getState) => {
  request
    .post(`${baseUrl}/comment`)
    .send(data)
    .then(res => {
      const action = newCommentCreated(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
const fetchAllComments = comment => ({
  type: FETCH_COMMENTS,
  payload: comment
});

export const fetchComments = () => (dispatch, getState) => {
  request
    .get(`${baseUrl}/comment`)
    .then(res => {
      console.log(res.body);
      const action = fetchAllComments(res.body);
      dispatch(action);
      // console.log("comments", res.body);
    })
    .catch(console.error);
};
