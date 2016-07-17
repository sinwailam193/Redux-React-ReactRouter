import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/auth/auth.action";

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._renderErrorMessage = this._renderErrorMessage.bind(this);
  }

  _handleChange(event) {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  }

  _handleSubmit(event) {
    event.preventDefault();
    const {email, password} = this.state;
    this.props.signinUser({email, password});
  }

  _renderErrorMessage() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {email, password} = this.state;

    return (
      <form onSubmit={this._handleSubmit} className="signin">
        <fieldset className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" name="email" value={email} onChange={this._handleChange} />
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={password} onChange={this._handleChange} />
        </fieldset>
        {this._renderErrorMessage()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}

export default connect(mapStateToProps, actions)(Signin);