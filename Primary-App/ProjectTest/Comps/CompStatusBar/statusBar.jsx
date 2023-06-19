import React, { useState} from 'react';

import { View, StatusBar, Button } from 'react-native';
import { Style } from '../Styles/style';

export default function () {

    const [color, setColor] = useState('teal');

    const colorChange = c => setColor(c)
 
    return (
        
        <View style={Style.container}>

            <StatusBar
                backgroundColor= {color}
                barStyle='light-content'
                
            />

            <Button
                style = { Style.btn }
                title='Color Red'
                onPress = {() => {colorChange('#800000')}}
            />

            {/* <Button
                title='Color Blue'
                onPress = {() => {colorChange('#000080')}}
            />

            <Button
                title='Color Green'
                onPress = {() => {colorChange('#008000')}}
            /> */}

        </View>
    );
}