import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { newEvent } from "../Actions/eventActions";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { UserObject } from "./interfaces";
import { Typography } from "@material-ui/core";
// The first commit of Material-UI

const AddNewEventContainer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [startDate, setStartDate] = useState<any>(
    new Date("2020-04-18T21:11:54")
  );
  const [endDate, setEndDate] = useState<any>(new Date("2020-04-18T21:11:59"));
  const user: UserObject = useSelector((state: any) => state.users);
  const dispatch = useDispatch();
  const data: {} = { name, description, url, startDate, endDate };
  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(newEvent(data));
  };
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };
  const handleEndDateChange = (dateEnd: any) => {
    setEndDate(dateEnd);
  };
  if (user.auth) {
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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            START DATE:
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog-start"
              label="Date picker dialog"
              format="yyyy/MM/dd"
              value={startDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
            END DATE:
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog-end"
              label="Date picker dialog"
              format="yyyy/MM/dd"
              value={endDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <button onClick={onSubmit}>CREATE</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="login">
          <Typography>Please Login</Typography>
        </Link>
      </div>
    );
  }
};

export default AddNewEventContainer;
