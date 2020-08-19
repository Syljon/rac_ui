import React from "react";
import Pages from "./components";
import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./shared/helpers/history";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./shared/helpers/snackbar";

export const Routes: { [key: string]: string } = {
  Login: "/login",
  SetPassword: "/set-password",
};

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <SnackbarUtilsConfigurator />
      <Router history={history}>
        <Switch>
          <Route path={Routes.Login} component={Pages.LoginPage} />
          <Route path={Routes.SetPassword} component={Pages.SetPassword} />
          <Redirect from="*" to={Routes.Login} />
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
