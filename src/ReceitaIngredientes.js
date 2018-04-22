import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';

export default class ReceitaIngredientes extends Component {

    static navigationOptions = {
        tabBarLabel:'Ingredientes',
    }
    render(){
        return(
            <View>
                
                <FlatList
                    data={this.props.screenProps.ingredientes}
                    renderItem={({item})=> <Text style={styles.ingItem}>{item.txt} </Text> }
                    keyExtractor={(item, index)=> item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingItem:{
        fontSize:20,
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    }
});