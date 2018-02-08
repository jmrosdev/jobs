import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';

import { fetchCompanies } from '../actions/index';
import { loginUserGoogle } from '../actions/login';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }

  render() {
    const {name,email,photo}  = this.props.user;
    
    return (
      <div className="page-home">
          {!email ? <h1>User not logged</h1> : <h1>Logged {name}</h1>}                     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps, {fetchCompanies})(Home);
