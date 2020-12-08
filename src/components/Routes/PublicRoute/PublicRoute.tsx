import { RouteUrl } from "@/shared/enums";
import React, { FC, ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface OwnProps {
  component: ReactNode;
  isAuthenticated: boolean;
}

type Props = OwnProps & RouteProps;

const PublicRoute: FC<Props> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to={RouteUrl.NewService} />
        ) : (
          // @ts-ignore
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
