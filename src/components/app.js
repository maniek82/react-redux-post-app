import React, { Component } from 'react';


export default class App extends Component {
  render() {
    //nested routes 
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
