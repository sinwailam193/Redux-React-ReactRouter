import React, {  Component } from 'react';

require("../../style/style.scss");
require("../../style/style1.scss");

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
