import React from "react";
import Menu from "./Menu";
import withAuthentication from "./withAuthentication";

class App extends React.Component {
  render() {
    return (
      <>
        <Menu />

        <div className="padding30">
          <h1>Home</h1>
        </div>
      </>
    );
  }
}

const WrappedComponent = withAuthentication(App);
export default WrappedComponent;
