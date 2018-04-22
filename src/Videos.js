import React, { Component } from 'react';
 
import { StyleSheet, View, WebView, Platform } from 'react-native';
 
export default class App extends Component{

  constructor(props) {
    super(props);
    this.state ={
      videos:[
				{
					key:'01',
					nome:"Hambúrguer de Feijão Preto",
					por:'Presunto vegetariano',
					descricao:'Hambúrgueres veganos são opções bem gostosas e práticas para o dia a dia, podendo ser servidos em lanches, com saladas ou refeições. Este leva ingredientes acessíveis e fáceis de serem encontrados.',
					rendimento:6,
					preparo:12,
					imagem:'https://i.pinimg.com/564x/3e/44/be/3e44be24fbe44bb994042fc5651cee8c.jpg',
					
        },
        {
					key:'02',
					nome:"Hambúrguer de Feijão Preto",
					por:'Presunto vegetariano',
					descricao:'Hambúrgueres veganos são opções bem gostosas e práticas para o dia a dia, podendo ser servidos em lanches, com saladas ou refeições. Este leva ingredientes acessíveis e fáceis de serem encontrados.',
					rendimento:6,
					preparo:12,
					imagem:'https://i.pinimg.com/564x/3e/44/be/3e44be24fbe44bb994042fc5651cee8c.jpg',
					
        }
      ]
    }
  }

    
 
  render() {
    return (
 
        <View >
 
            <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/pBmDceoyaJw' }}
                    style={{ height: 300 }}
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