import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllEvents } from "../Actions/eventActions";
import AddNewEventContainer from "./AddNewEventContainer";
const EventListContainer = () => {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events);
  useEffect(() => {
    dispatch(showAllEvents());
  }, []);
  console.log("list", events);
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>
          <h1>{event.name}</h1>
          <p>{event.description}</p>
          <img src={event.url} alt="No" />
        </div>
      ))}{" "}
      <AddNewEventContainer />
    </div>
  );
};

export default EventListContainer;
