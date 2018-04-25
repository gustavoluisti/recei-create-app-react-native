import React, { Component } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from 'expo';


export default class ReceitaResumo extends Component {

    static navigationOptions = {
        tabBarLabel:'Resumo',
    }
    render(){
        return(
            <View>
                <Text style={styles.nomeReceita} >{this.props.screenProps.nome}</Text>
                <Text style={styles.porReceita}>Por: {this.props.screenProps.por} </Text>
                <Text style={styles.descricao}>{this.props.screenProps.descricao} </Text>
                <AdMobBanner
					bannerSize="fullBanner"
					adUnitID="ca-app-pub-5537548119879720/8295976662" // Test ID, Replace with your-admob-unit-id
					testDeviceID="EMULATOR"
					onDidFailToReceiveAdWithError={this.bannerError} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    nomeReceita:{
        fontSize:26,
        alignItems:'center',
        marginTop:10,
        marginLeft:20,
        marginRight:10,
        fontWeight:'bold',
        color:'#104E8B',
    },
    porReceita:{
        fontSize:16,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
    },
    descricao:{
        fontSize:18,
        marginLeft:10,
        marginTop:10,
    },
});