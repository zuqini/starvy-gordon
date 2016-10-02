import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Dimensions,
} from 'react-native';
import {
    MKButton,
    MKColor,
    MKIconToggle,
    getTheme,
} from 'react-native-material-kit';

const theme = getTheme();

const RestaurantItem = function(props) {
    return (
        <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
            style={{
                padding : 30,
                borderWidth: 1,
                borderColor: '#d6d7da',
              }}
        >
            <Text style={[theme.cardContentStyle, {padding:0}]}>
                {props.name}
            </Text>
        </View>
    );
};

RestaurantItem.propTypes = {
    name: React.PropTypes.string.isRequired,
}
export default RestaurantItem;
