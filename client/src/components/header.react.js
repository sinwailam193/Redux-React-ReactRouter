import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { get_cookie } from "../utils/cookie";
import { authUser } from "../actions/auth/auth.action";

class Header extends Component {
  constructor(props) {
    super(props);
    this._renderLinks = this._renderLinks.bind(this);
  }

  componentDidMount() {
    if(get_cookie("authtoken")) {
      this.props.authUser();
    }
  }

  _renderLinks() {
    if(this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign out</Link>
        </li>
      );
    }
    return [
      <li className="nav-item" key="signin">
        <Link className="nav-link" to="/signin">Sign in</Link>
      </li>,
      <li className="nav-item" key="signup">
        <Link className="nav-link" to="/signup">Sign up</Link>
      </li>
    ];
  }

  render() {
    return (
      <nav className="header navbar navbar-light">
        <Link to="/" className="navbar-brand">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {this._renderLinks()}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {authUser})(Header);
