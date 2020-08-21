import React from "react";
import { Popover, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";
import store from "../../store";
import * as AuthActions from "../../store/auth/actions";
import history from "../../shared/helpers/history";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const storedUser = store.getState().auth.user;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const logout = () => {
    localStorage.removeItem("accessToken");
    store.dispatch(AuthActions.removeUser());
    history.push("/login");
  };

  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => handleClick(e)}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {storedUser?.firstName}
        <br></br>
        {storedUser?.lastName}
        <br></br>
        <Button onClick={logout}> Logout </Button>
      </Popover>
    </>
  );
}
