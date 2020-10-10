import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
// import Description from "./Description";
import "../css/ConcertCard.css"

function ConcertCard({ data }) {
  const { name, picture, category, date, artist } = data;
  const classes = useStyles();
  return (
    <Card className="restaurant__card">
      <CardActionArea>
        <CardMedia className={classes.media} image={picture} title={name} />
        {/* <Description
          title={name}
          category={category}
          date={date}
          artist={artist}
        /> */}
      </CardActionArea>
    </Card>
  );
}

export default ConcertCard;