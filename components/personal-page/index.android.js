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
import foodImg from '../../img/food.jpg';
import plusWhite from '../../img/plus_white.png';

const ColoredFab = MKButton.coloredFab()
    .withStyle({
        position: 'absolute',
        bottom: 20,
        right: 20,
    }   )
    .build();

class PersonalPage extends Component {
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
                        My Restaurants
                    </Text>
                </View>
                <ScrollView style={styles.scrollView}>
                    {/*mock data*/}
                    <RestaurantItem name='Panino' />
                    <RestaurantItem name='Burger King' />
                    <RestaurantItem name='Mickeys' />
                    <RestaurantItem name="Aunties' Kitchen" />
                    <RestaurantItem name='Fruitie Foodie' />
                    <RestaurantItem name='Sugar Marmalade' />
                    <RestaurantItem name='WeMesh' />
                    <RestaurantItem name='Giliam Meeussen Eatery' />
                    <RestaurantItem name='Zuqini Cutecumber' />
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
