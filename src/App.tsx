import React, { FC, useEffect, useState } from "react";
import { Routes } from "./components";
import { GlobalStyle } from "./shared/styles";
import { ReactQueryDevtools } from "react-query-devtools";
import { ENV } from "./shared/constants";
import { QueryStatus, useMutation } from "react-query";
import { AuthContext } from "./shared/context";
import { get } from "lodash";
import { User } from "./shared/types";
import { me } from "./shared/actions";

interface OwnProps {}

type Props = OwnProps;

const App: FC<Props> = () => {
  const [user, setUser] = useState<User | null>(null);
  const [getMe, { status }] = useMutation(me);

  useEffect(() => {
    console.log("NEW CONFIG");
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
      <Routes />
    </AuthContext.Provider>
  );
};

export default App;
