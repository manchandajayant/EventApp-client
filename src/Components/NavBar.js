import React from "react";
import { Toolbar, Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIosSharpIcon from "@material-ui/icons/ArrowForwardIosSharp";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Link } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));
const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: "rgba(50,50,50,0.9)" }}>
      <Toolbar>
        <Typography className={classes.typoStyles} style={{ color: "#000000" }}>
          TICKET-BAR
        </Typography>

        <Link href="/newevent" style={{ marginRight: "2%", color: "black" }}>
          NEW EVENT
        </Link>
        <ArrowBackIosIcon style={{ color: "#000000" }} />
        <DragIndicatorIcon style={{ color: "#000000" }} />
        <ArrowForwardIosSharpIcon style={{ color: "#000000" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
