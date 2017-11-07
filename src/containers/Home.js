import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header/Header.jsx';
import { DatePicker } from 'antd';

import { fetchCompanies, loginUserGoogle } from '../actions/index';

// Home page component
class Home extends React.Component {

  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    return (
      <div className="page-home">
        <Header />
        <DatePicker />
        <button onClick={this.props.loginUserGoogle()}>LOGIN GOOGLE</button>
      </div>
    );
  }
}

export default connect(null, {fetchCompanies, loginUserGoogle})(Home);
