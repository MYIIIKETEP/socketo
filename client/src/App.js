import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Join from "./components/Join/Join.js";
import Chat from "./components/Chat/Chat.js";
import Register from "./components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"

const App = () => {



    return (
        <Router>

            <Route path="/" component={Login} />
            <Route path="/chat" component={Chat} />
            <Route path="/join" exact component={Join} />
            <Route path="/reg" exact component={Register} />
        </Router>
    )
}



export default App; 