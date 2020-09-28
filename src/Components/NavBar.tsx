import React from "react";
import { useSelector } from "react-redux";
import { Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { UserObject } from "./interfaces";
const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));
const Navigation: React.FC = () => {
  const user: UserObject = useSelector((state: any) => state.users);
  const classes = useStyles();
  console.log(user, "user");
  return (
    <AppBar
      position="static"
      style={{ backgroundColor: "rgba(150,250,250,0.1)" }}
    >
      <Toolbar>
        <Typography className={classes.typoStyles} style={{ color: "#000000" }}>
          <Button href="/events" style={{ color: "#000" }}>
            TICKET-BAR
          </Button>
        </Typography>
        {user.auth ? (
          <p style={{ color: "black" }}>LOGGED IN</p>
        ) : (
          <Button href="/login">Login</Button>
        )}

        <Button href="/newevent" style={{ marginRight: "2%", color: "black" }}>
          NEW EVENT
        </Button>

        <ArrowBackIosIcon style={{ color: "#000000" }} />
        <DragIndicatorIcon style={{ color: "#000000" }} />
        <ArrowForwardIosSharpIcon style={{ color: "#000000" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
