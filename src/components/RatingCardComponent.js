import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import ExploreIcon from "@material-ui/icons/Explore";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import DuoIcon from "@material-ui/icons/Duo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        icon={<DuoIcon />}
        label="Video quality"
        clickable
        color="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<GraphicEqIcon />}
        label="Audio quality"
        clickable
        color="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<CameraAltIcon />}
        label="Camera works"
        clickable
        color="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<ExploreIcon />}
        label="Location"
        clickable
        color="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
      <Chip
        icon={<AudiotrackIcon />}
        label="Vocal"
        clickable
        color="secondary"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
        variant="outlined"
      />
    </div>
  );
}
