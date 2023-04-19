import React, {useState} from 'react';

import { View, Text, Modal,Button, Alert } from 'react-native';
import { Style } from '../Styles/style';

export default function () {

    const [visible, setVisible] = useState(true)

    return (
        
        <View >
            
            <Modal
                animationType='slide'
                visible={visible}
            >

                <View style = { Style.modal }  >

                    <Text style={Style.textModal}> Open Modal </Text>
                    <Button 
                        style = { Style.btn }    
                        title='Close Modal'
                        onPress={() => setVisible(false)}
                    
                    />

                </View>
                
            </Modal>

            <View style={Style.container}>
                
                <Text style = {Style.text}> Closed Modal </Text>
                <Button
            
                    title=' Open Modal'
                    onPress = { () => setVisible(true) }
                
                />
                
            </View>

        </View>
    );
}
