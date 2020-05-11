import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { newEvent } from "../Actions/eventActions";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

// The first commit of Material-UI

const AddNewEventContainer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [startDate, setStartDate] = useState(new Date("2020-04-18T21:11:54"));
  const [endDate, setEndDate] = useState(new Date("2020-04-18T21:11:59"));
  const dispatch = useDispatch();
  const data = { name, description, url, startDate, endDate };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(newEvent(data));
  };
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };
  const handleEndDateChange = (dateEnd) => {
    setEndDate(dateEnd);
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
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          START DATE:
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
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
            id="date-picker-dialog"
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
};

export default AddNewEventContainer;
