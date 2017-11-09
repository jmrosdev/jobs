import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
      return (
        <div>
          <h1>WELCOME</h1>
          <h2>{name}</h2>
          <h2>{email}</h2>
          <img src={photo} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page-home">
        <Header />
        <button onClick={this.props.loginUserGoogle}>LOGIN GOOGLE</button>
        {this.renderUser()}
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
