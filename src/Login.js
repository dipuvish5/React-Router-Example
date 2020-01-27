import React from "react";
import Menu from "./Menu";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    localStorage.setItem("isLoggedIn", "yes");
    this.props.history.push("/users");
  }

  render() {
    return (
      <>
        <Menu />
        <button onClick={this.loginUser}>Login</button>;
      </>
    );
  }
}

export default Login;
