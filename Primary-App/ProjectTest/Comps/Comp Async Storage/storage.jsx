import React, { useState } from 'react';

import {
  View,
  Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Style} from './style'

export default App = () => {

  const [course, setCourse] = useState(null)

  const storage = (key, value) => {
    AsyncStorage.setItem(key, value)
  }

  const search = async value => {
    const key =  await AsyncStorage.getItem(value);
    setCourse(key);
  }

  storage('01', 'curso de React Native');
  storage('02', 'Aprendendo UI Design')
  storage('03', 'Melhorar a lógica de programação')

  search('03')


  return (

    <View style={Style.container}>

      <Text> Testing  {course} </Text>

    </View>

  );
}