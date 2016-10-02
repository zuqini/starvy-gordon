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
    View,
    ScrollView,
    Image,
    Dimensions,
    StatusBar,
} from 'react-native';
import {
    MKButton,
    MKColor,
    MKIconToggle,
} from 'react-native-material-kit';
import RestaurantItem from '../restaurant-item';
import Api from '../../api/api';

import foodImg from '../../img/food.jpg';
import plusWhite from '../../img/plus_white.png';

const ColoredFab = MKButton.coloredFab()
    .withStyle({
        position: 'absolute',
        bottom: 20,
        right: 20,
    }   )
    .build();

class PersonalPage extends React.Component {
    constructor(props) {
        super(props);
        this.items = [];
        this.state = {
            //defaults
            latitude: 43.4722893,
            longitude: -80.5470463,
            apiData: {},
        };
    }

    componentWillUpdate(nextProps, nextState) {
        if(nextState.apiData && nextState.apiData.businesses) {
            this.items = nextState.apiData.businesses.map((business) => {
                return (
                    <RestaurantItem name={business.name} />
                );
            });
        }
    }

    componentDidMount() {
        Api.getRestaurants(this.state.latitude, this.state.longitude).then((apiData) => {this.setState({apiData});});
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                Api.getRestaurants(position.coords.latitude, position.coords.longitude).then((apiData) => {this.setState({apiData});});
            },
            (error) => {},
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000}
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{width: Dimensions.get('window').width, height: 200}}>
                    <Image source={foodImg} style={{width: Dimensions.get('window').width, maxHeight: 200}}/>
                    <Text style={{position: 'absolute',
                            bottom: 20,
                            left: 20,
                            color: '#ffffff',
                            fontWeight: 'bold',
                            fontSize: 30}}>
                        Nearby Restaurants
                    </Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {this.items}
                </ScrollView>
                <ColoredFab>
                    <Image pointerEvents="none" source={plusWhite} />
                </ColoredFab>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
        height:  Dimensions.get('window').height-StatusBar.currentHeight,
    },
    row: {
        flexDirection: 'row',
    },
    col: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: 7, marginRight: 7,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 10, marginBottom: 20,
    },
    legendLabel: {
        textAlign: 'center',
        color: '#666666',
        marginTop: 10, marginBottom: 20,
        fontSize: 12,
        fontWeight: '300',
    },
});

export default PersonalPage;
