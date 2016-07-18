import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRequireAuth } from "../actions/feature/feature.action";

class Feature extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRequireAuth();
  }

  render() {
    return (
      <div className="feature">{this.props.message}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.feature.message
  };
}

export default connect(mapStateToProps, {fetchRequireAuth})(Feature);
