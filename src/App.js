import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Matched from "./pages/matched.js";
import Matcher from "./pages/matcher.js";
import FrontPage from "./pages/frontpage.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={FrontPage} />
                <Route path="/match" exact component={Matcher} />
                <Route path="/matched" exact component={Matched} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
