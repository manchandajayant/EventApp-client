import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEvent } from "../Actions/eventActions";
import { showAllTickets } from "../Actions/ticketActions";
import { useParams } from "react-router-dom";
import TicketLayout from "./TicketLayout";
import { Grid } from "@material-ui/core";
import CreateNewTicketContainer from "./CreateNewTicketContainer";
import { TicketObject, EventsObject } from "./interfaces";
const EventTickets: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const event: EventsObject = useSelector((state: any) => state.event);
  const tickets: [] = useSelector((state: any) => state.tickets);

  useEffect(() => {
    dispatch(showAllTickets());
    dispatch(fetchEvent(id));
  }, [id, dispatch]);
  const ticketCard = (ticketsObject: TicketObject) => {
    return (
      <Grid item xs={12} sm={12} md={4}>
        <TicketLayout {...ticketsObject} />
      </Grid>
    );
  };

  const filteredTickets = tickets.filter((f: any) => {
    return f.eventId === parseInt(id);
  });

  if (!event) {
    return <div>loading...</div>;
  } else {
    return (
      <div>
        <h1>{event.name}</h1>
        <Grid container spacing={4}>
          {filteredTickets.map((ticketsObject: TicketObject, index: number) => (
            <Fragment key={Math.random()}>{ticketCard(ticketsObject)}</Fragment>
          ))}
        </Grid>
        <CreateNewTicketContainer />
      </div>
    );
  }
};

export default EventTickets;
