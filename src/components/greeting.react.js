import React, {  Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/sample.action";

class Greeting extends Component {

  constructor(props){
    super(props);
  }

  _handleClick = () => {
    // browserHistory.push("/");
    this.props.fetch();
  }

  render(){
    return (
      <div>
        this is greeting
        <button onClick={this._handleClick}>Submit</button>
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
