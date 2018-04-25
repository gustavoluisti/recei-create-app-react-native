console.ignoredYellowBox = [
    'Setting a timer'
];
import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from 'expo';

export default class ReceitaModo extends Component {

    static navigationOptions = {
        tabBarLabel:'Preparo',
    }
    render(){
        return(
            <ScrollView style={styles.ingItem}>
                <Text style={styles.modo} key={this.modo} >{this.props.screenProps.modo}</Text>
                <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-5537548119879720/8295976662" // Test ID, Replace with your-admob-unit-id
                    testDeviceID="EMULATOR"
                    onDidFailToReceiveAdWithError={this.bannerError} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    ingItem:{
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    },
    modo:{
        fontSize:20,
        marginBottom:10,
    }
});