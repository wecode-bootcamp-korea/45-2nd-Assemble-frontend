import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NiceModal from "@ebay/nice-modal-react";
import { RecoilRoot } from "recoil";
import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NiceModal.Provider>
        <QueryClientProvider client={queryClient}>
          <Router />
        </QueryClientProvider>
      </NiceModal.Provider>
    </ThemeProvider>
  </RecoilRoot>
);
