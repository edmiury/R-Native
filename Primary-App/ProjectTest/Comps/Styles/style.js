import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({


    container: {
        width: 400,
        height: 750,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'violet',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    text: {
        color: 'blue',
        fontSize: 20,
    },

    img: {
        width: 500,
        resizeMode: 'contain',    
    },
    
    btn: {
        marginTop: 20,
        backgroundColor: 'black',
    },

});