import React, { Component } from "react";

export default class Children extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.children}</h1>
    );
  }
}
