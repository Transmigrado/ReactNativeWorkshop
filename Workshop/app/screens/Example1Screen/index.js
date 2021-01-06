
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Example1Screen = ({ navigation, route }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Primera pantalla</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Example2')
            }}>
                <Text>Ir al Detalle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Example1Screen
