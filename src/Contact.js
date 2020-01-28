import React from "react";
import Menu from "./Menu";
import withAuthentication from "./withAuthentication";

class Contact extends React.Component {
  onSubmit = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Menu />
        <div className="padding30">
          <h1>Contact</h1>
          <form>
            <input placeholder="name" type="name" />
            <input placeholder="email" type="email" />
            <button onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
      </>
    );
  }
}

const WrappedComponent = withAuthentication(Contact);

export default WrappedComponent;
