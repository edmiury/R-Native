import React, {
    useEffect,
    useState
} from 'react';

import {
    View,
    Text, 
    FlatList,
    Alert
} from 'react-native';


export default () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setData(value))
            .catch( () => Alert.alert('Atenção', 'Erro ao carregar '))
    }, [data])
    
    const Register = item => {
        return (

            <View>

                <Text> {item.name} </Text>
                <Text> {item.username} </Text>
                <Text> {item.address.city} </Text>
                <Text> {item.phone} </Text>

            </View>
        );
    }

    return (
        <View  >

            <Text> Fetchs </Text>

            <FlatList
                
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <View>{ Register(item) }</View>}
            />

        </View>
    );
}