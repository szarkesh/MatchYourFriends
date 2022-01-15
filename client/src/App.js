import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Matched from "./pages/matched.js";
import Home from "./pages/home.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
