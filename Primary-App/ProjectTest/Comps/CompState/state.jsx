import React, { useState} from 'react';

import { View, Text, Button, Alert } from 'react-native';

import { Style } from '../Styles/style';


export default function state() {

    const[on, seton] =useState(on)

    return (
        <View style = { Style.container }>
                
            <Button
                title = { on ? 'Desligar Componente' : ' Ligar Componente'}
                onPress = { () => seton( !on ) }
            />

            <View>

                {on ?
                    <Text style = { Style.text }> Relembrando o state! </Text>                    
                    :
                    <Text style = { Style.text }> Componente Desligado! </Text>
                
                }

                </View>

        </View>
    )
} 