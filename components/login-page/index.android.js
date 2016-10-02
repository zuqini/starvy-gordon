/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import CustomFBLogin from './fbLogin'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';
import FriendsList from '../friends-page/friendsList';

class LoginPage extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleBlock}>
                    <Text style={styles.title}>
                        CrunchBits
                    </Text>
                    <Text style={styles.slogan}>
                        Munch and chomp away together!
                    </Text>
                    <CustomFBLogin navigator={this.props.navigator}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#435a6b',
    },
    titleBlock: {},
    title: {
        fontSize: 60,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    slogan: {
        fontSize: 15,
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 20,
    },
    facebookBtnContainer: {
        padding: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        backgroundColor: '#3b5998',
    },
    facebookBtnInner: {
        fontSize: 20,
        color: '#ffffff',
    },
});

class RouteHandler extends Component {
    render() {
        return (
            <Navigator
                  initialRoute={{ id: "LoginPage" }}
                  renderScene={(route, nav) =>
                    {return this.renderScene(route, nav)}}
            />
        )
    };

    renderScene(route,nav) {
       switch (route.id) {
          case "FriendsList":
            return <FriendsList navigator={nav}/>
          case "LoginPage":
            return <LoginPage navigator={nav}/>
       }
   };
}

export default RouteHandler;
