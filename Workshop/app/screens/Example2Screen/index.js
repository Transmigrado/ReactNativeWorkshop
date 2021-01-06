
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Example2Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detalle</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Example3')
            }}>
                <Text>Ir a pantalla 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                navigation.pop()
            }}>
                <Text>Volver</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Example2Screen
