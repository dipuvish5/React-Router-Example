import React from "react";

const withAuthentication = WrapperComponent => {
  class NewComponent extends React.Component {
    componentDidMount() {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      //alert(isLoggedIn);
      if (isLoggedIn !== "yes") {
        this.props.history.push("/login");
      }
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  return NewComponent;
};

export default withAuthentication;
