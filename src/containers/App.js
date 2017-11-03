import React from "react";
import "../stylesheets/main.scss";

import {init as firebaseInit} from '../libs/firebase';

// app component
export default class App extends React.Component {
  
  constructor (props) {
    super(props);
    firebaseInit();
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}
