//https://codeburst.io/getting-started-with-react-router-5c978f70df91
import React from "react";
import ReactDOM from "react-dom";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Users from "./Users";
import Contact from "./Contact";
import Notfound from "./NotFound";
import "./index.css";

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
