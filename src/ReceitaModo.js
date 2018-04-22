import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default class ReceitaModo extends Component {

    static navigationOptions = {
        tabBarLabel:'Preparo',
    }
    render(){
        return(
            <View>
                <FlatList
                    data={this.props.screenProps.modo}
                    renderItem={({item})=> <Text style={styles.ingItem}>- Passo {item.key}: {item.txt} </Text> }
                    keyExtractor={(item, index)=> item.key}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ingItem:{
        fontSize:18,
        marginBottom:10,
        marginTop:10,
        marginLeft:10,
        marginRight:10,
    }
});