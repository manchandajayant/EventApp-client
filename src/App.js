import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import EventsListContainer from "./Components/EventsListContainer";
import Navigation from "./Components/NavBar";
import { Route } from "react-router-dom";
import AddNewEventContainer from "./Components/AddNewEventContainer";
function App() {
  return (
    <Grid container direction="column" style={{ backgroundColor: "#fff" }}>
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item container style={{ marginTop: "5%", marginBottom: "20%" }}>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Route exact path="/" component={EventsListContainer} />
          <Route exact path="/newevent" component={AddNewEventContainer} />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
