import React from "react";
import Header from '../components/Header/Header.jsx';
import { DatePicker } from 'antd';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Header />
        <DatePicker />
      </div>
    );
  }
}
