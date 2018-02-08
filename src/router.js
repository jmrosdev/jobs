import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "./store.js";
import App from "./containers/App";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

// build the router
const router = (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/prueba" component={Home}/>
      <Route component={NotFound} />
    </Switch>
  </Router>
);

// export
export { router };
