import React, { Component } from "react";
import { connect } from "react-redux";
import { signoutUser } from "../../actions/auth/auth.action";

class Signout extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
}

export default connect(null, {signoutUser})(Signout);
