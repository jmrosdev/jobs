import React, {Component} from "react";
import "../stylesheets/main.scss";

class App extends Component {
  
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
