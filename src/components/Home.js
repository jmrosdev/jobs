import React from "react";
import { DatePicker } from 'antd';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h4>Hello world!</h4>
        <DatePicker />
      </div>
    );
  }
}
