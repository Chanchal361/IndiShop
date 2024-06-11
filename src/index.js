import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./App";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <BrowserRouter>
    <Provider store={store}>
        <App/>
        <Toaster/>
    </Provider>
   </BrowserRouter>
)