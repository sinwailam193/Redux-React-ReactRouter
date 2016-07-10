import React, { Component } from "react";

export default class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className="greeting">Greeting!</h1>
    );
  }
}
