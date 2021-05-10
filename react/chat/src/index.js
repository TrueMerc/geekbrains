import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "./components/Layout.jsx";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Layout />
    </MuiThemeProvider>,
    document.getElementById("main")
);