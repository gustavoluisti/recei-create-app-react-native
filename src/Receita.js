import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { TabNavigator } from 'react-navigation';

import ReceitaResumo from './ReceitaResumo';
import ReceitaModo from './ReceitaModo';
import ReceitaIngredientes from './ReceitaIngredientes';

const Navegador = TabNavigator({
    ReceitaResumo:{
        screen:ReceitaResumo
    },
    ReceitaIngredientes:{
        screen:ReceitaIngredientes
    },
    ReceitaModo:{
        screen:ReceitaModo
    }
}, {
    tabBarPosition:'top',
    animationEnabled:true,
    tabBarOptions:{
        style:{
            backgroundColor:'#4682B4',
        },
        labelStyle:{
           fontSize:13,
           height:47, 
           lineHeight:47,
        },
        activeTintColor:'#333',
        inactiveTintColor:'#FFF',

    }
});

export default class Receita extends Component{

    static navigationOptions = {
        header:null
    }

    constructor(props) {
        super(props)
        this.state = {};

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style={styles.container} >
                <TouchableHighlight underlayColor="#CCC" onPress={this.goBack} style={styles.backButton} >
                    <Image source={require('../assets/images/back.png')} style={styles.backImage}  />
                </TouchableHighlight>
                <Image source={{uri:this.props.navigation.state.params.link}} style={styles.receitaImagem} />
                <Navegador screenProps={this.props.navigation.state.params} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
    },
    backImage:{
        width:26,
        height:26,
    },
    backButton:{
        width:26,
        height:26,
        marginLeft:10,
        marginTop:5,
        zIndex:99,
    },
    receitaImagem:{
        height:200,
        marginTop:-51
    },
    rendimento:{
        marginLeft:10,
    }
});