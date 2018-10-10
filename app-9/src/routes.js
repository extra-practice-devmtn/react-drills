import React from "react";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Details from "./Components/Details";
import {Route,Switch} from "react-router-dom";

export default (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Details" component={Details}/>
    </Switch>
)