import React from 'react';

import { View, Text, ImageBackground } from 'react-native';

import { Style } from '../Styles/style';

import Switch from '../CompSwitch/switch'

export default function imgBackground() {

    return (
        
        <ImageBackground 
            style = { Style.Img }
            source = { require('../../assets/img/omen.jpg')}
        >

            <View >
               <Switch />

            </View>

        </ImageBackground>

    )
}