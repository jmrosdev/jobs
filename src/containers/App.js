import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header/Header.jsx';

import { fetchCompanies } from '../actions/index';
import { loginUserGoogle } from '../actions/login';

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchCompanies();
  }

  loginGoogle () {
    this.props.loginUserGoogle()
  }

  goToHome = () => {
    return (
      <Redirect to="/prueba"/>
    )
  }

  render() {
    const {name,email,photo}  = this.props.user;
    
    return (
      <div className="page-home">
        <Header />
          <button onClick={() => this.loginGoogle()}>LOGIN GOOGLE</button>
          {!email ? <h1>User not logged</h1> : this.goToHome()}                     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps, {fetchCompanies, loginUserGoogle})(App);
