import React, { FC } from "react";
import styled from "styled-components";
import { NewServiceForm } from "./containers";
import { GlobalStyle } from "./shared/styles";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <MainAppWrapper>
        <NewServiceForm />
      </MainAppWrapper>
    </>
  );
};

const MainAppWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
`;
export default App;
