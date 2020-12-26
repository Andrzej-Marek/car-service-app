import { RouteUrl } from "@/shared/enums";
import React, { FC, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

interface OwnProps {}

type Props = OwnProps;

const NotFoundPage: FC<Props> = () => {
  const history = useHistory();

  useEffect(() => {
    history.push(RouteUrl.Auth);
  }, []);

  return (
    <Wrapper>
      <p>Not found page</p>
      <p>Redirect in 5s</p>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default NotFoundPage;
