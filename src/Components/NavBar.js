import React from "react";
import { Toolbar, Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyles = makeStyles(() => ({
  typoStyles: {
    flex: 1,
  },
}));
const Navigation = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" style={{ backgroundColor: "#2b4141" }}>
      <Toolbar>
        <Typography className={classes.typoStyles}>BAR</Typography>
        <AcUnitIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
