import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({


    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        color: '#80000f',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "justify",
        
    },
    
    Img: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#ddd',
        marginTop: 10,
        fontSize: 17,
        fontWeight: 'bold'
    },

    scroll: {
        backgroundColor: '#999',
        borderRadius: 10,
        padding: 15,
    },

    modal: {
        backgroundColor: '#800000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },

    textModal: {
        color: '#fff'
    },

    btn: {
        marginBottom: 10,
        padding: 10,
        fontWeight: 'bold'
    } 


});