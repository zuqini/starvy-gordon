import React, { Component } from 'react';
import { StyleSheet,Text,View } from 'react-native';

class FriendsList extends React.Component {
  constructor(props) {
      super(props);
  };

  render() {
    return (
        <Text> I has friends now </Text>
    )
  }
}

module.exports = FriendsList;
