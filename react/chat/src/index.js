import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout.jsx";

ReactDOM.render(
    <Layout chatsCount={10} />,
    document.getElementById("main")
);