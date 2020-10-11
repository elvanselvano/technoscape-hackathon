import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import RatingCardComponent from "./RatingCardComponent";
import RatingTextFieldComponent from "./RatingTextFieldComponent";
import RatingSliderComponent from "./RatingSliderComponent";
import "../components/styles/VideoPlayerStyle.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function VideoPlayerComponent({ title, description, url }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ReactPlayer url={url} width="100%" height="360px" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {truncate(description, 150)}
          </Typography>
        </CardContent>
      </CardActionArea>
      <RatingSliderComponent />
      <RatingCardComponent />
      <RatingTextFieldComponent />
      <div className="buttons-wrapper">
        <div clasName="left-button">
          <CardActions>
            <Button size="small" color="secondary">
              Share
            </Button>
            <Button size="small" color="secondary">
              Learn More
            </Button>
            <Button size="small" color="secondary">
              Post Review
            </Button>
          </CardActions>
        </div>
        <CardActions>
          <div className="right-button"></div>
        </CardActions>
      </div>
    </Card>
  );
}

export default VideoPlayerComponent;
