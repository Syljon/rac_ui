import React from "react";
import { Redirect, Route } from "react-router-dom";
import store from "../../store";

const AdminRoute = ({ component, token, ...rest }: any) => {
  const role = store.getState().auth.user?.role;
  const routeComponent = (props: any) =>
    role === "Admin" ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/dashboard" }} />
    );
  return <Route {...rest} render={routeComponent} />;
};

export default AdminRoute;
