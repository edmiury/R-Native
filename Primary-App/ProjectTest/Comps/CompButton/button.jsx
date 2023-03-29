import { View, Text, Button, Alert } from 'react-native';

import { Style } from '../../Comps/Styles/style';

export default  function primaryButton() {

    return (
    

        <View style={Style.container}>

            <Text style={Style.text}>  
                Learning About Buttons ↓
            </Text>

            <Button
                style = { Style.btn }
                title = 'Test ☻'
                onPress={() => Alert.alert('Attention', 'Testing my fist button ☺')}
            />

            </View>

    )
}; 