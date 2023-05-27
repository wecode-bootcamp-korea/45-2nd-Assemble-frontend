import React from "react";
import ReactDOM from "react-dom/client";
import NiceModal from "@ebay/nice-modal-react";
import Router from "./Router";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NiceModal.Provider>
        <Router />
      </NiceModal.Provider>
    </ThemeProvider>
  </RecoilRoot>
);
