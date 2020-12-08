import { RouteUrl } from "@/shared/enums";
import React, { FC, ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface OwnProps {
  component: ReactNode;
  isAuthenticated: boolean;
}

type Props = OwnProps & RouteProps;

const PrivateRoute: FC<Props> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          // @ts-ignore
          <Component {...props} />
        ) : (
          <Redirect to={RouteUrl.Auth} />
        )
      }
    />
  );
};

export default PrivateRoute;
