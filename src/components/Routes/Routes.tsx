import { Auth, NewServiceForm } from "@/containers";
import { RouteUrl } from "@/shared/enums";
import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { Modal } from "..";

interface OwnProps {}

type Props = OwnProps;

const Routes: FC<Props> = () => {
  return (
    <Switch>
      <Route path={RouteUrl.NewService}>
        <NewServiceForm />
      </Route>
      <Route path={RouteUrl.Auth}>
        <Modal isOpen>
          <Auth />
        </Modal>
      </Route>
    </Switch>
  );
};

export default Routes;
