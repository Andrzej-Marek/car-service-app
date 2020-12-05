import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/constants";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

ReactDOM.render(
  <Suspense fallback={<div>Loading..</div>}>
    <ReactQueryCacheProvider queryCache={queryCache}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ReactQueryCacheProvider>
  </Suspense>,
  document.getElementById("root")
);
