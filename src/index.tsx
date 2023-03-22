import React from "react";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import App from "./App";
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const isDevelopment = process.env.NODE_ENV === "development";
console.log('isDevelopment :', isDevelopment)

function prepare() {
  if (isDevelopment) {
    const { worker } = require("./mocks/browser");
    worker.start();
  }
  return Promise.resolve();
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      console.log(error, query);
      if (query.state.data !== undefined) {
        alert(`Error has been occurred in queryCache...`);
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
  }),
});

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

prepare().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <App />
          </QueryClientProvider>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
})


