import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  square: {
    backgroundColor: "#8eb19d",
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}></span>;
  const { name, description, url, startDate, endDate, id } = props;
  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar variant="square" className={classes.square}>
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={name}
        subheader={startDate}
      />
      <Link to={`/event/${id}`}>
        <CardMedia style={{ height: "150px" }} image={url} />
      </Link>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {"Live"}
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {"venue"}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Tickets</Button>
      </CardActions>
    </Card>
  );
};

export default Layout;
