import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout.jsx";

ReactDOM.render(
    <Layout chatsCount={5} />,
    document.getElementById("main")
);