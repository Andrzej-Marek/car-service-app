import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Routes } from "./components";
import { GlobalStyle } from "./shared/styles";
import { ReactQueryDevtools } from "react-query-devtools";
import { ENV } from "./shared/constants";
import { QueryStatus, useQuery } from "react-query";
import { me } from "./shared/actions/query";
import { AuthContext } from "./shared/context";
import { get } from "lodash";
import { User } from "./shared/types";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  const [user, setUser] = useState<User | null>(null);

  const meQuery = useQuery("me", me, {
    retry: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (meQuery.status === QueryStatus.Success || !user) {
      setUser(get(meQuery, "data.data.user", null));
    }
  }, [meQuery]);

  if (meQuery.status === QueryStatus.Loading) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {ENV.ENV === "DEVELOPMENT" && <ReactQueryDevtools initialIsOpen />}
      <GlobalStyle />
      <MainAppWrapper>
        <Routes />
      </MainAppWrapper>
    </AuthContext.Provider>
  );
};

const MainAppWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  background: ${({ theme }) => theme.color.background};
  padding: 0 10px;
`;
export default App;
