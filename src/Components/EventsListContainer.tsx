import React, { useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showAllEvents } from "../Actions/eventActions";
import Grid from "@material-ui/core/Grid";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import { EventsObject } from "./interfaces";

const EventListContainer: React.FC = () => {
  const dispatch = useDispatch();
  const events: [] = useSelector((state: any) => state.events);

  useEffect(() => {
    dispatch(showAllEvents());
  }, [dispatch]);

  const eventCard = (eventsObject: EventsObject) => {
    return (
      <Grid item xs={12} sm={12} md={4}>
        <Layout {...eventsObject} />
      </Grid>
    );
  };

  return (
    <div>
      <Grid container spacing={4}>
        {events.map((eventsObject: EventsObject, index: number) => (
          <Fragment key={index}>{eventCard(eventsObject)}</Fragment>
        ))}
      </Grid>
      <br />
    </div>
  );
};

export default EventListContainer;
