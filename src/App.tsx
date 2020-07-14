import React from "react";
import Pages from "./components";
import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

export const Routes: { [key: string]: string } = {
  Login: "/login",
  SetPassword: "/set-password",
};

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path={Routes.Login} component={Pages.LoginPage} />
        <Route path={Routes.SetPassword} component={Pages.SetPassword} />
        <Redirect from="*" to={Routes.Login} />
      </Switch>
    </Router>
  );
}

export default App;
