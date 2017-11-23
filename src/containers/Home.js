import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  renderUser () {
    const {name,email,photo}  = this.props.user;
    if (!email) {
      return (
        <h1>User not logged </h1>
      );
    } else {
      this.props.history.push('/prueba');
    }
  }

  render() {
    const {name,email,photo}  = this.props.user;
    
    return (
      <div className="page-home">
        <Header />
          <button onClick={this.props.loginUserGoogle}>LOGIN GOOGLE</button>
          {email ? <Redirect to='/prueba' /> : <h1>User not logged</h1>}                     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo
  }
}

export default connect(mapStateToProps, {fetchCompanies, loginUserGoogle})(Home);
