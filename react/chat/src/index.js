import React from "react";
import ReactDOM from "react-dom";
import { Application } from "./components/Application.jsx";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

ReactDOM.render(
    <MuiThemeProvider>
        <Application />
    </MuiThemeProvider>,
    document.getElementById("main")
);