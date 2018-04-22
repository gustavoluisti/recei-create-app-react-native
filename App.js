import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';
import Videos from './src/Videos';

const Navegador = StackNavigator({
  Lista:{
    screen:Lista
  },
  Receita:{
    screen:Receita
  }
});

export default Navegador;