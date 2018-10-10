import React from "react";
import {Switch,Route} from "react-router-dom";
import Product from "./Components/Products";
import Details from "./Components/Details";

export default (
    <Switch>
        <Route exact path="/" component={Product}/>
        <Route path="/details/:id" component={Details}/>
    </Switch>
)