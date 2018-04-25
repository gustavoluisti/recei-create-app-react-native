import React, { Component } from 'react';

import { StyleSheet, View, WebView, Platform, Text } from 'react-native';
import firebase from 'firebase';

export default class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			listaReceitas:[]
				
		};
		const config = {
			apiKey: "AIzaSyADvfIUt_5liJ9qbosi_DAhXMQisNdZvI0",
			authDomain: "mercadodev-e4369.firebaseapp.com",
			databaseURL: "https://mercadodev-e4369.firebaseio.com",
			projectId: "mercadodev-e4369",
			storageBucket: "mercadodev-e4369.appspot.com",
			messagingSenderId: "1009979116282"
		  };
		  firebase.initializeApp(config);  

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
		}
  render() {
    return (

        <View style={{ height: 300 }}>
			<Text>{this.state.descricao}</Text>
            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/dFKhWe2bBkM' }}
            />

        </View>

    );
  }
}

const styles = StyleSheet.create({

WebViewContainer: {

    marginTop: (Platform.OS == 'ios') ? 20 : 0,

  }
  
});