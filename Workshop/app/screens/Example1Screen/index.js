
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'


const Example1Screen = ({ navigation, route }) => {
    
    const onPress =  () => {
        navigation.navigate('Example1')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Primera pantalla</Text>
                <TouchableOpacity id="mainButton" onPress={onPress}>
                    <Text>Ir al Detalle</Text>
                </TouchableOpacity>
        </View>
    )
}

export default Example1Screen
