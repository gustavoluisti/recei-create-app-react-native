console.ignoredYellowBox = [
    'Setting a timer'
];
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight } from 'react-native';

export default class ReceitaItem extends Component {
    constructor(props){
        super(props);
        this.state = {}

    }

  
    render() {
        return(
            <TouchableHighlight onPress={this.props.onPress} >
                <View style={styles.area}>
                    <View style={styles.info} >
                        <Text style={styles.nomeReceita} >{this.props.data.nome} </Text>
                    </View>
                    <Image source={{uri:this.props.data.link}} style={styles.imagem} />
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    area:{
        height:300,
        borderBottomWidth:1,
        borderColor:'#fff',
        backgroundColor:'#4682B4',
    },
    imagem:{
            width:null,
            height:270,
            marginTop:10,
    },nomeReceita:{
            fontSize:20,
            fontWeight:'bold',
            textAlign:'center',
            color:'#FFF',
            marginTop:10,
    },
    info:{
        marginLeft:5,
        marginRight:5,
    }
});
