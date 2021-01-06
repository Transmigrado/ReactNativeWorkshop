
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const ModalScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Esto es un modal Screen</Text>
           <TouchableOpacity onPress={() => {
               navigation.navigate('Modal2')
           }}>
               <Text>Vamoms a la segunda pantalla</Text>
           </TouchableOpacity>
        </View>
    )
}

export default ModalScreen

