'use strict';

import React, { Component } from 'react';
import { StyleSheet,Text,View,Navigator } from 'react-native';
import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

/**
  eg.
  Please note:
  - if buttonView is not set then a default view will be shown
  - this is not meant to be a full example but highlights what you have access to
**/

class CustomFBLogin extends React.Component {
  constructor(props) {
      super(props);
  };

  componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.setState({
          navigator: nextProps.navigator
      });
  };

  responseFacebook = (response) => {
    console.log(response);
    this.props.navigator.replace({
        id: "PersonalPage"
    });
  };

  render() {
    var _this = this;
    return (
        <FBLogin
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            permissions={["email","public_profile", "user_friends"]}
            onLogin={this.responseFacebook}
            onError={function(e){console.log(e)}}
            onLoginFound={function(e){_this.props.navigator.replace({id: "PersonalPage"})}}
            onLoginNotFound={function(e){console.log(e)}}
            onLogout={function(e){console.log(e)}}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />
    )
  }
}

export default CustomFBLogin;
