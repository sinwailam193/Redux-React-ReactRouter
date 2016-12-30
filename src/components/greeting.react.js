import React, {  Component, PropTypes } from "react";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import * as actions from "../actions/sample.action";
import Children from "./children.react";

class Greeting extends Component {
  handleClick = async (event) => {
    await this.props.fetch();
    console.log("second");
    // browserHistory.push("/");
  }

  render(){
    const { handleClick } = this;

    return (
      <div>
        this is greeting
        <a
          href=""
          role="button"
          name="popover"
          className="btn btn-danger"
          data-trigger="focus"
          data-toggle="popover"
          data-placement="right"
          data-content="this is popover"
          onClick={handleClick}>
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
