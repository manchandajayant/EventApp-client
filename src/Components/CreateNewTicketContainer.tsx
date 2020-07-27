import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTicket } from "../Actions/ticketActions";
import { EventsObject } from "./interfaces";

const CreateNewTicketContainer = () => {
  const event: EventsObject = useSelector((state: any) => state.event);
  const user: any = useSelector((state: any) => state.users);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  console.log("evvent", user);
  const [eventId, setEventId] = useState<number>(event.id);
  console.log(eventId);
  const [userId, setUserId] = useState<number>(user.loggedInUser);
  const dispatch = useDispatch();

  const data = { price, description, url, eventId, userId };
  const onSubmit = (event: any) => {
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
