import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";

export default function RequireAuth(Component) {
  class Authentication extends Component {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      if(!this.props.authenticated) {
        browserHistory.push("/signin");
      }
    }

    componentWillReceiveProps(nextProps) {
      if(!nextProps.authenticated) {
        browserHistory.push("/signin");
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  return connect(mapStateToProps)(Authentication);
}
