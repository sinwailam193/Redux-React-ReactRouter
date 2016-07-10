import React, {  Component } from "react";
import Header from "./header.react";

export default class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="app">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
