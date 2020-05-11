import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import { showAllTickets } from "../Actions/ticketActions";
import { useParams } from "react-router-dom";
import TicketLayout from "./TicketLayout";
import { Grid } from "@material-ui/core";
import CreateNewTicketContainer from "./CreateNewTicketContainer";
const EventTickets = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event = useSelector((state) => state.event);
  const tickets = useSelector((state) => state.tickets);

  useEffect(() => {
    dispatch(showAllTickets());
    dispatch(fetchEvent(id));
  }, [id, dispatch]);
  const ticketCard = (ticketsObject) => {
    return (
      <Grid item xs={12} sm={12} md={4}>
        <TicketLayout {...ticketsObject} />
      </Grid>
    );
  };

  const filteredTickets = tickets.filter((f) => {
    console.log("array", f.eventId);
    console.log("comp", id);
    return f.eventId === parseInt(id);
  });
  console.log("tickets", filteredTickets);
  console.log("event", event);
  if (!event) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <h1>{event.name}</h1>
        <Grid container spacing={4}>
          {filteredTickets.map((ticketsObject, index) =>
            ticketCard(ticketsObject)
          )}
        </Grid>
        <CreateNewTicketContainer />
      </div>
    );
  }
};

export default EventTickets;
