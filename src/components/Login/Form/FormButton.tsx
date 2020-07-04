import React from "react";
import { createStyles, makeStyles, Button } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) =>
  createStyles({
    wrapper: {
      position: "relative",
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    buttonProgress: {
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -10,
      marginLeft: -12,
    },
  })
);

export default function FormButton(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={props.loading}
      >
        {props.children}
      </Button>
      {props.loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
}
