import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="header navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">Sign in</li>
        </ul>
      </nav>
    );
  }
}

export default connect(null)(Header);
