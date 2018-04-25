console.ignoredYellowBox = [
	'Setting a timer'
];

import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase'

import ReceitaItem from './ReceitaItem';

import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded
  } from 'expo';

export default class Lista extends Component {

	static navigationOptions = {
        title:'Receitando',
	};

	constructor(props) {
		super(props);
		this.state = {
			listaReceitas:[]
				
		};
		

		  firebase.database().ref('receitas').once('value', (snapshot)=>{
			let state = this.state;
			state.lista = [];

			snapshot.forEach((childItem) =>{
				state.listaReceitas.push({
					key:childItem.key,
					nome:childItem.val().nome,
					descricao:childItem.val().descricao,
					link:childItem.val().link,
					rendimento:childItem.val().rendimento,
					ingredientes:childItem.val().ingredientes,
					modo:childItem.val().modo,
					preparo:childItem.val().preparo,
					por:childItem.val().por,
					video:childItem.val().video

				});
			});
			this.setState(state);
		  });
		  

        this.clicou = this.clicou.bind(this);
	}

    clicou(item) {
        this.props.navigation.navigate('Receita', item);
    }


	render() {
		return (
			<View style={styles.container}>
			
                <FlatList
                    data={this.state.listaReceitas}
                    renderItem={({item})=><ReceitaItem data={item} onPress={()=>{
                        this.clicou(item);
                    }} /> }
				/>
				
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
        flex:1,
        backgroundColor:'#FFF',
	}
});






