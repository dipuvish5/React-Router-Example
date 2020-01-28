import React from "react";
import Menu from "./Menu";
import { Route, Link } from "react-router-dom";
import withAuthentication from "./withAuthentication";

const User = ({ match }) => <p>{match.params.id}</p>;

class Users extends React.Component {
  render() {
    const { url } = this.props.match;
    return (
      <>
        <Menu />
        <div className="padding30">
          <h1>Users</h1>
          <strong>select a user</strong>
          <ul>
            <li>
              <Link to="/users/1">User 1 </Link>
            </li>
            <li>
              <Link to="/users/2">User 2 </Link>
            </li>
            <li>
              <Link to="/users/3">User 3 </Link>
            </li>
          </ul>
          <Route path="/users/:id" component={User} />
        </div>
      </>
    );
  }
}

const WrappedComponent = withAuthentication(Users);

export default WrappedComponent;
