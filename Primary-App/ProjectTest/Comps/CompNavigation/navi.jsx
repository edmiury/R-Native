import React from 'react';

import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

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