import React, { FC, useMemo } from "react";
import { Auth, Layout, NewServiceForm } from "@/containers";
import { useAuthContext } from "@/shared/context";
import { RouteUrl } from "@/shared/enums";
import { checkIfUserIsAuthenticated } from "@/shared/helpers";
import { Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = () => {
  const { user } = useAuthContext();

  const isAuthenticated = useMemo(() => {
    return checkIfUserIsAuthenticated(user);
  }, [user]);

  return (
    <Layout isAuthenticated={isAuthenticated}>
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
    </Layout>
  );
};

export default Routes;
