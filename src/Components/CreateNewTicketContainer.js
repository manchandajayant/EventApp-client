import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTicket } from "../Actions/ticketActions";

const CreateNewTicketContainer = () => {
  const event = useSelector((state) => state.event);
  const user = useSelector((state) => state.users);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  console.log("evvent", user);
  const [eventId, setEventId] = useState(event.id);
  console.log(eventId);
  const [userId, setUserId] = useState(user.loggedInUser);
  const dispatch = useDispatch();

  const data = { price, description, url, eventId, userId };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(newTicket(data));
  };

  return (
    <div>
      PRICE:
      <input
        type="text"
        name="price"
        placeholder="price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      DESCRIPTION
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      PICTURE:
      <input
        type="text"
        name="url"
        placeholder="Event Logo"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      <button onClick={onSubmit}>CREATE</button>
    </div>
  );
};

export default CreateNewTicketContainer;
