import React, {  Component } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/sample.action";

import Modal from "./modal.react";

class Greeting extends Component {

  constructor(props){
    super(props);
    this.state = {
      show: false
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    // browserHistory.push("/");
    this.setState({ show: !this.state.show });
    this.props.fetch();
  }

  render(){
    const { show } = this.state;

    return (
      <div>
        <h1>this is greeting</h1>
        <button onClick={this._handleClick}>{this.props.message}</button>
        {show ?
          <Modal>
            <h1>A Really long amount of modal content</h1>
            <p>Etc.</p>
          </Modal> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.sample.message
  };
}

export default connect(mapStateToProps, actions)(Greeting);
