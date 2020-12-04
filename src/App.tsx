import React, { FC } from "react";
import styled from "styled-components";
import { Modal } from "./components";
import { Login, NewServiceForm } from "./containers";
import { GlobalStyle } from "./shared/styles";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <Modal isOpen>
        <Login />
      </Modal>
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
  padding: 0 10px;
`;
export default App;
