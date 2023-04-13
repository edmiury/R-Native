import React from 'react';

import { View, Text, FlatList } from 'react-native';
import { Style } from '../Styles/style';

export default function fList() {
    const products = [
        {
            id: '01',
            desc: 'Mouse gamer',
            valor: ' R$ 500',
        },

        {
            id: '02',
            desc: 'Teclado Mecânico',
            valor: 'R$ 1000'
        }
    ]
    return (

        <View >

            <FlatList           
                data = { products }
                keyExtractor = { item => item.id }
                renderItem={({ item }) =>  <Text>  Descrição: { item.desc } no valor de apenas {item.valor} !! </Text> }
            />

        </View>
    )
}