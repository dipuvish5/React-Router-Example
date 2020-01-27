import React from "react";

class Logout extends React.Component {
  componentDidMount() {
    //let isLoggedIn = localStorage.getItem("isLoggedIn");
    //alert(isLoggedIn);
    localStorage.removeItem("isLoggedIn");
    //isLoggedIn = localStorage.getItem("isLoggedIn");
    //alert(isLoggedIn);
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}

export default Logout;
