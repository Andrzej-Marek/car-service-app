import { Auth, NewServiceForm } from "@/containers";
import { RouteUrl } from "@/shared/enums";
import React, { FC } from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = () => {
  const isAuthenticated = true;
  return (
    <Switch>
      <PrivateRoute
        isAuthenticated={isAuthenticated}
        component={NewServiceForm}
        path={RouteUrl.NewService}
      />
      <PublicRoute
        isAuthenticated={isAuthenticated}
        component={Auth}
        path={RouteUrl.Auth}
      />
    </Switch>
  );
};

export default Routes;
