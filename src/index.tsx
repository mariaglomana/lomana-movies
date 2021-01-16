import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./assets/css/index.css";
import App from "./App";

// import {UserProvider} from "./contexts/user";


// import reportWebVitals from './reportWebVitals';

// // redux toolkit
// import { Provider } from "react-redux";
// import store from "./redux/store";

const routing = (
  <ThemeProvider theme={theme}>
    {/* <UserProvider> */}

    <CssBaseline />
    <App />
    {/* </UserProvider> */}

  </ThemeProvider>


);
ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
