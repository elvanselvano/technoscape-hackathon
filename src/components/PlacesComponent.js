import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function PlacesComponent() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="on">
      <TextField
        id="standard-basic"
        label="Find concerts near you!"
        color="secondary"
      />
    </form>
  );
}

export default PlacesComponent;
