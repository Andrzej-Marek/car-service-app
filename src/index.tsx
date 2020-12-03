import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/constants";
import "./i18n";
import App from "./App";

ReactDOM.render(
    <Suspense fallback={<div>Loading..</div>}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Suspense>,
    document.getElementById("root")
);
