import React from "react";
import { NavLink } from "react-router-dom";

class Menu extends React.Component {
  render() {
    return (
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

        {localStorage.getItem("isLoggedIn") === "yes" ? (
          <li>
            <NavLink exact activeClassName="active" to="/logout">
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink exact activeClassName="active" to="/login">
              Login
            </NavLink>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
