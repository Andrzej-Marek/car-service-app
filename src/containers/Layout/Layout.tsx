import { NavBar } from "@/components";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  isAuthenticated: boolean;
}

type Props = OwnProps;

const Layout: FC<Props> = ({ isAuthenticated, children }) => {
  return (
    <>
      {isAuthenticated && <NavBar />}
      <Wrapper>{children}</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
  padding: 0 10px;
`;

export default Layout;
