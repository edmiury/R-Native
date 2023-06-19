import React from 'react';

import { Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

// import {Home, SecondScreen} from './contentNavi'

const Content = createStackNavigator();


export const Home = ({ navigation }) => {
    return (
        
        <View>

            <Text>  Home! </Text>

        </View>

    )
}
export default function () {

    return (
        

        <NavigationContainer>

            <Content.Navigator>

                <Content.Screen 
                    name='Home'
                    component={Home}
                
                />

            </Content.Navigator>

        </NavigationContainer>
    )
}