import React from "react";
import { Toolbar, Typography, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";

const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));
const Navigation: React.FC = () => {
  const classes = useStyles();
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
