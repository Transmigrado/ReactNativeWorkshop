
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const Example3Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detalle</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Modal')
            }}>
                <Text>Mostrar modal</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Example3Screen
