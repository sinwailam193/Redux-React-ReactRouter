import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth/auth.action";

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup">Sign up</div>
    );
  }
}

export default connect()(Signup);
