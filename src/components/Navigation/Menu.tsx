import React from "react";
import {
  Menu,
  MenuItem,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function MyMenu() {
  const history = useHistory();
  const classes = useStyles();

  const [uiState, setUIState] = React.useState(null);

  const handleClick = (event: any) => {
    setUIState(event.currentTarget);
  };

  const handleClose = () => {
    setUIState(null);
  };

  const menuLinkClick = (route: string) => {
    history.push(route);
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        className={classes.menuButton}
        onClick={(e) => handleClick(e)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={uiState}
        keepMounted
        open={Boolean(uiState)}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => menuLinkClick("/dashboard")}>Test</MenuItem>
        <MenuItem onClick={() => menuLinkClick("/dashboard")}>Test</MenuItem>
      </Menu>
    </>
  );
}
