import React, {  Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/sample.action";
import Children from "./children.react";

class Greeting extends Component {

  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  async _handleClick() {
    await this.props.fetch();
    console.log("second");
    // browserHistory.push("/");
  }

  render(){
    return (
      <div>
        this is greeting
        <a
          href="#"
          role="button"
          className="btn btn-danger"
          data-trigger="focus"
          data-toggle="popover"
          data-placement="right"
          data-content="this is popover"
          onClick={this._handleClick}>
          hello world
        </a>
        <Children>This is child</Children>
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
