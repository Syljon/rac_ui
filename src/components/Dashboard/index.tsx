import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
}));

export default function SignInPage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography component="h1" variant="h5">
          Dashboard
        </Typography>
      </div>
    </Grid>
  );
}
