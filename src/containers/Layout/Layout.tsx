import { NavBar } from "@/components";
import React, { FC } from "react";
import styled from "styled-components";

interface OwnProps {
  isAuthenticated: boolean;
}

type Props = OwnProps;

const Layout: FC<Props> = ({ isAuthenticated, children }) => {
  return (
    <Wrapper>
      {isAuthenticated && <NavBar />}
      <PageWrapper>{children}</PageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  position: relative;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.color.background};
  min-height: 100vh;
`;

const PageWrapper = styled.div`
  padding: 0 10px;
`;
export default Layout;
