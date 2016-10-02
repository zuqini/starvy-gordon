'use strict';

import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';
var Icon = require('react-native-vector-icons/FontAwesome');
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

  responseFacebook = (response) => {
    console.log(response);
  };

  render() {
    return (
        <FBLogin
            ref={(fbLogin) => { this.fbLogin = fbLogin }}
            loginBehavior={FBLoginManager.LoginBehaviors.Native}
            permissions={["email","public_profile", "user_friends"]}
            onLogin={this.responseFacebook}
            onError={function(e){console.log(e)}}
            onLoginFound={function(e){console.log(e)}}
            onLoginNotFound={function(e){console.log(e)}}
            onLogout={function(e){console.log(e)}}
            onCancel={function(e){console.log(e)}}
            onPermissionsMissing={function(e){console.log(e)}}
          />
    )
  }
}

class FBLoginView extends Component {
  static contextTypes = {
    isLoggedIn: React.PropTypes.bool,
    login: React.PropTypes.func,
    logout: React.PropTypes.func,
    props: React.PropTypes.object
    };

  constructor(props) {
      super(props);
    }

    render(){
        return (
          <View style={[]}>
            <Icon.Button onPress={() => {
                if(!this.context.isLoggedIn){
                  this.context.login()
                }else{
                  this.context.logout()
                }

              }}
              color={"#000000"}
              backgroundColor={"#ffffff"} name={"facebook"}  size={20} borderRadius={100} >

            </Icon.Button>
          </View>
      )
    }
}

export default CustomFBLogin;
