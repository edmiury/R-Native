import React, {useState} from 'react';

import { View, Text, TouchableHighlight, StyleSheet, TouchableOpacity } from 'react-native';



export default function () {

    const [counter, setCounter] = useState(0);

    const start = () => setCounter(counter + 1);
    

    return (
        
        <View style={Style.container}>

            < TouchableHighlight
                style={Style.touch}
                onPress={start}
                underlayColor='white'
            >

                <Text style={Style.text}> + Counter </Text>
                
            </ TouchableHighlight>

            < TouchableHighlight
                style={Style.touch2}
                onPress={() => setCounter(counter - 1)}
                underlayColor='white'
            >

                <Text style={Style.text} > - Counter </Text>
                
            </ TouchableHighlight>

            < TouchableOpacity
                style={Style.touch}
                onPress={() => setCounter(0)}>

                <Text style={Style.text}> Counter 0  </Text>

            </ TouchableOpacity>

            <Text style={Style.counter}> Counter:  {counter} </Text>

        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'teal'
    },

    text: {
        fontSize: 25,
        color: 'darkblue',
        textAlign: 'center'

    },

    touch: {
        marginTop: 10,
        marginBottom: 10,
        width: 150,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10,
    },

    touch2: {
        backgroundColor: 'gray',
        padding: 10,
        borderRadius: 10
    },

    counter: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderBottomColor: 'darkblue'
    },

});