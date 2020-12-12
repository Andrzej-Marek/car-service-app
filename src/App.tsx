import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { Routes } from "./components";
import { GlobalStyle } from "./shared/styles";
import { ReactQueryDevtools } from "react-query-devtools";
import { ENV } from "./shared/constants";
import { QueryStatus, useMutation } from "react-query";
import { me } from "./shared/actions/query";
import { AuthContext } from "./shared/context";
import { get } from "lodash";
import { User } from "./shared/types";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  const [user, setUser] = useState<User | null>(null);
  const [getMe, { status }] = useMutation(me);

  // const meQuery = useQuery("me", me, {
  //   retry: false,
  //   refetchOnReconnect: false,
  // });

  useEffect(() => {
    getCurrentLoginUser();
  }, []);

  const getCurrentLoginUser = async () => {
    const user = await getMe();

    if (!user) {
      setUser(null);
      return;
    }

    if (user && user.data) {
      setUser(get(user, "data.user", null));
      return;
    }

    setUser(null);
  };

  if (status === QueryStatus.Loading) {
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
