import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
// import "./styles/home.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// console.log(window.location.pathname);

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
