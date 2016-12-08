import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRequireAuth } from "../actions/feature/feature.action";

class Feature extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    // this.props.fetchRequireAuth();
  }

  async onClick() {
    await this.props.fetchRequireAuth();
    console.log("afterward");
  }

  render() {
    return (
      <div className="feature">
        {this.props.message}
        <input type="button" value="click" onClick={this.onClick} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.feature.message
  };
}

export default connect(mapStateToProps, {fetchRequireAuth})(Feature);
