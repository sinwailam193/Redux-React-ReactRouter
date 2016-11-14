import React, { Component } from "react";
import ReactDOM from "react-dom";
import { store } from "../index";
import { Provider } from "react-redux";

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this._render = this._render.bind(this);
  }

  componentDidMount() {
    this.modalTarget = document.createElement("div");
    this.modalTarget.className = "modal";
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        <div>{this.props.children}</div>
      </Provider>,
      this.modalTarget);
  }

  render() {
    // noscript tag tells react that there is nothing to render here
    return (
      <noscript />
    );
  }
}
