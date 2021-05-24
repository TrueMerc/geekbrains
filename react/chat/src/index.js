import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
            <Layout />
        </PersistGate>
    </Provider>
    ,
    document.getElementById("main")
);