import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newEvent } from "../Actions/eventActions";

const AddNewEventContainer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();
  const data = { name, description, url, startDate, endDate };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(newEvent(data));
  };
  return (
    <div>
      NAME:
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      DESCRIPTION
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      EVENT LOGO:
      <input
        type="text"
        name="url"
        placeholder="Event Logo"
        onChange={(e) => setUrl(e.target.value)}
        value={url}
      />
      START DATE:
      <input
        type="text"
        name="startDate"
        placeholder="Start Date"
        onChange={(e) => setStartDate(e.target.value)}
        value={startDate}
      />
      END DATE:
      <input
        type="text"
        name="endDate"
        placeholder="End Date"
        onChange={(e) => setEndDate(e.target.value)}
        value={endDate}
      />
      <button onClick={onSubmit}>CREATE</button>
    </div>
  );
};

export default AddNewEventContainer;
