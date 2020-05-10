import React from "react";
import {
  Typography,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
  },
  pos: {
    marginBottom: 12,
  },
  square: {
    backgroundColor: "rgba(50,50,50,0.5)",
  },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Layout = (props) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}></span>;
  const { name, description, url, startDate, endDate, id } = props;
  return (
    <Card variant="outlined" style={{ backgroundColor: "#fff" }}>
      <CardHeader
        avatar={
          <Avatar variant="square" className={classes.square}>
            <EventAvailableIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        subheader={startDate}
      />
      <Link to={`/event/${id}`}>
        <CardMedia style={{ height: "150px" }} image={url} />
      </Link>
      <CardContent>
        <Typography variant="h5" gutterBottom className={classes.title}>
          {name}
        </Typography>{" "}
        <Typography className={classes.pos} color="textSecondary">
          {"venue"}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ backgroundColor: "rgba(50,50,50,0.5)" }}>
          Buy Tickets
        </Button>
      </CardActions>
    </Card>
  );
};

export default Layout;
