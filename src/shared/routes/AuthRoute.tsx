import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../../store";

const AuthRoute = ({ component, ...rest }: any) => {
  const id = store.getState().auth.user?.role;
  const routeComponent = (props: any) =>
    id ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/login" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default AuthRoute;
