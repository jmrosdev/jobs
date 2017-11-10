import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, browserHistory } from 'react-router';

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
    this.props.loginUserGoogle();
    const {name,email,photo}  = this.props.user;
    if (!email) {
      return (
        <h1>User not logged </h1>
      );
    } else {
      <Redirect to="/prueba" />
    }
  }

  render() {
    const {name,email,photo}  = this.props.user;
    
    return (
      <div className="page-home">
        <Header />
          <button onClick={this.props.loginUserGoogle}>LOGIN GOOGLE</button>
          {email ? this.props.router.push('/prueba') : <h1>User not logged</h1>}                     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userInfo
  }
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps, {fetchCompanies, loginUserGoogle})(Home);
