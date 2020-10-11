import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from "react-player";
import RatingCardComponent from "./RatingCardComponent";
import RatingTextFieldComponent from "./RatingTextFieldComponent";
import RatingSliderComponent from "./RatingSliderComponent";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
});

function VideoPlayerComponent({ title, description, url }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <ReactPlayer url={url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <RatingSliderComponent />
      <RatingCardComponent />
      <RatingTextFieldComponent />
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default VideoPlayerComponent;
