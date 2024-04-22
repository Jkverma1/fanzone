import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";
import { GlobalProvider } from "context";
import App from "App";

const root = document.getElementById("root");

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </React.StrictMode>
);
