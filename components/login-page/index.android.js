/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

class LoginPage extends Component {
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
                    <Button style={styles.facebookBtnInner}
                        containerStyle={styles.facebookBtnContainer}>
                        CONTINUE VIA FACEBOOK
                    </Button>
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

export default LoginPage;
