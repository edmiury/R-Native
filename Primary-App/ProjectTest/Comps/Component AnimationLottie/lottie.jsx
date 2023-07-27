import React from 'react';

import {
    View,
    Text
} from 'react-native';

import Lottie from 'lottie-react-native';

export default function  AnimationLottie () {
    return (
        <View>
            
            <Lottie
                source={require('../../assets/animationSave.json')}
                autoPlay
            />

        </View>
    )
}