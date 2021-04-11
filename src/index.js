import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Layout from "./Layout";
import store from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Layout>
                <App />
            </Layout>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
