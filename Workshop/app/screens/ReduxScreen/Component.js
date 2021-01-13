import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'


const ReduxScreen = ({ count, increment, decrement }) => {


    return (
        <SafeAreaView style={{flex: 1}}>
           
            <TouchableOpacity onPress={increment} style={styles.button}>
                <Text style={styles.label}>Incrementar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decrement} style={styles.button}>
                <Text style={styles.label}>Disminuir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:'blue',
        padding: 10
    },
    label:{
        color:'white'
    }
})

export default ReduxScreen