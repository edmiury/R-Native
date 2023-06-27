import { View, Text } from 'react-native'
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Touch from './Comps/CompTouch/touch'
import Modal from './Comps/CompModal/modal'



const Stack = createStackNavigator();



export default function App() {
  return (
    
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name=' ' component={Touch} options={{
            headerTransparent: true,
            headerTintColor: 'white'
        }} />
        <Stack.Screen  name = 'modal' component={Modal} />
        </Stack.Navigator>
      </NavigationContainer>
       
  )
}