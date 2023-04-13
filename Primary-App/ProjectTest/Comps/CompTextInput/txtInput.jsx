import React, {useState} from 'react';

import { SafeAreaView, Text, TextInput } from 'react-native';

import {Style} from '../Styles/style'

export default function () {
    
    const [name, setName] = useState('')

    return (
        <SafeAreaView>

            <Text  style={Style.text}> Your Name ↓ </Text>
            <TextInput
                style={Style.input}
                value={name}
                onChangeText = { text => setName(text) }
            />

            <Text> {name} </Text>


        </SafeAreaView>
    )
}