import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import EventsListContainer from "./Components/EventsListContainer";
import Navigation from "./Components/NavBar";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <EventsListContainer />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
