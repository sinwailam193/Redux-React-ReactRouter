import React, { Component } from "react";
import { connect } from "react-redux";
import { signUser } from "../../actions/auth/auth.action";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordConfirm: "",
      errorPassword: "",
      errorEmail: ""
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._renderEmailError = this._renderEmailError.bind(this);
  }

  _handleChange(event) {
    const obj = {};
    obj[event.target.name] = event.target.value;
    if(event.target.name === "email" && event.target.value) {
      obj["errorEmail"] = "";
    }
    if(event.target.name === "password" && event.target.value === this.state.passwordConfirm) {
      obj["errorPassword"] = "";
    }
    else if(event.target.name === "passwordConfirm" && event.target.value === this.state.password) {
      obj["errorPassword"] = "";
    }
    this.setState(obj);
  }

  _handleSubmit(event) {
    event.preventDefault();
    const {email, password, passwordConfirm} = this.state;
    if(email && password && passwordConfirm && password === passwordConfirm) {
      this.props.signUser({email, password}, "signup");
    }
    else {
      if(!email) {
        this.setState({
          errorEmail: "Please enter an email"
        });
      }
      if(!password || !passwordConfirm) {
        this.setState({
          errorPassword: "Please enter a password and a password confirm"
        });
      }
      if(password !== passwordConfirm) {
        this.setState({
          errorPassword: "Passwords must match"
        });
      }
    }
  }

  _renderEmailError() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {email, password, passwordConfirm, errorPassword, errorEmail} = this.state;

    return (
      <form onSubmit={this._handleSubmit} className="signup">
        <fieldset className="form-group">
          <label>Email:</label>
          <input type="text" className="form-control" name="email" value={email} onChange={this._handleChange} />
          <div className="error">{errorEmail}</div>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" className="form-control" name="password" value={password} onChange={this._handleChange} />
          <div className="error">{errorPassword}</div>
        </fieldset>
        <fieldset className="form-group">
          <label>Confirm Password:</label>
          <input type="password" className="form-control" name="passwordConfirm" value={passwordConfirm} onChange={this._handleChange} />
        </fieldset>
        {this._renderEmailError()}
        <button action="submit" className="btn btn-primary">Sign up</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorEmail
  };
}

export default connect(mapStateToProps, {signUser})(Signup);
