import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Users from "./Users";
import Contact from "./Contact";
import Notfound from "./NotFound";
import Login from "./Login";
import Logout from "./Logout";
import "./index.css";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
