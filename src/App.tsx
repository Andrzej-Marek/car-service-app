import React, { FC } from "react";
import styled from "styled-components";
import { Routes } from "./components";
import { GlobalStyle } from "./shared/styles";
import { ReactQueryDevtools } from "react-query-devtools";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <>
      <ReactQueryDevtools initialIsOpen />
      <GlobalStyle />
      <MainAppWrapper>
        <Routes />
      </MainAppWrapper>
    </>
  );
};

const MainAppWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
  padding: 0 10px;
`;
export default App;
