import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import MyMenu from "./Menu";
import Profile from "./Profile";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      minHeight: "auto",
      height: "7vh",
      justifyContent: "space-between",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed">
      <Toolbar className={classes.toolbar}>
        <MyMenu />
        <Profile />
      </Toolbar>
    </AppBar>
  );
}
