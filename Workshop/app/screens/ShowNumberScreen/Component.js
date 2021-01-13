import React from 'react'
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native'


const ReduxScreen = ({ count }) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.number}>{`${count}`}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    number:{
        fontSize: 30
    }
})

export default ReduxScreen