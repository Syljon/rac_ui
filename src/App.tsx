import React, { useEffect, useState } from "react";
import Pages from "./components";
import "./App.css";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import history from "./shared/helpers/history";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./shared/helpers/snackbar";
import AuthRoute from "./shared/routes/AuthRoute";
import jwt_decode from "jwt-decode";
import { User } from "./store/auth/types";
import store, { RootState } from "./store";
import * as AuthActions from "./store/auth/actions";
import Loading from "./components/Loading";
import Navbar from "./components/Navigation";
import { useSelector } from "react-redux";

export const Routes: { [key: string]: string } = {
  Login: "/login",
  SetPassword: "/set-password",
  Dashboard: "/dashboard",
};

function App() {
  const [loading, setLoading] = useState(true);
  const storedUser = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const user: User = jwt_decode(accessToken);
      store.dispatch(AuthActions.storeUser(user));
      history.push("/dashboard");
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <SnackbarProvider maxSnack={3}>
        <SnackbarUtilsConfigurator />
        <Router history={history}>
          {storedUser && <Navbar></Navbar>}
          <Switch>
            <Route path={Routes.Login} component={Pages.LoginPage} />
            <Route path={Routes.SetPassword} component={Pages.SetPassword} />
            <AuthRoute path={Routes.Dashboard} component={Pages.Dashboard} />
            <Redirect from="*" to={Routes.Login} />
          </Switch>
        </Router>
      </SnackbarProvider>
    );
  }
}

export default App;
