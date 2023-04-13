
import { View, Button, Alert } from 'react-native';

import { Style } from '../../Comps/Styles/style';

export default  function primaryButton() {

    return (
    
        <View >

            <Button
                style={Style.btn}
                title= 'Test' 
                onPress = { () => Alert.alert('Testing my first button ☺') }
            />

            </View>

    )
}; 