import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Lista from './src/Lista';
import Receita from './src/Receita';
import Videos from './src/Videos';
import Preload from './src/Preload';

const Navegador = StackNavigator({
  Preload:{
    screen:Preload
  },
  Lista:{
    screen:Lista
  },
  Receita:{
    screen:Receita
  }
});

export default Navegador;