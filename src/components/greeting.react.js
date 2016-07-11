import React, {  Component, PropTypes } from "react";
import { browserHistory } from "react-router";

export default class Greeting extends Component {

  constructor(props){
    super(props);
  }

  _handleClick = () => {
    browserHistory.push("/");
  }

  render(){
    return (
      <div>
        this is greeting
        <button onClick={this._handleClick}>Submit</button>
      </div>
    );
  }
}
