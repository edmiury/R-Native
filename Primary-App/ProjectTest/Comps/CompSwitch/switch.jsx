import React, { useState } from 'react';

import { View, Text, Switch, } from 'react-native';
import { Style } from '../Styles/style';


export default function compSwitch() {
    const [on, setOn] = useState(false)

    const reset = () => setOn(!on)
        
    return (
        <View>

            <Switch
                trackColor = {{false: 'gray', true: 'red'}}
                thumbColor={on ? 'aliceblue' : 'teal'}
                value={on}
                onValueChange = {reset}

            />

            <Text style = { Style.text}> Testing </Text>

        </View>
    )
}