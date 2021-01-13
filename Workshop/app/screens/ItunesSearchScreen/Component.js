import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, Image, TextInput } from 'react-native'

const ReduxScreen = ({ searchItunes, tracks, isLoading }) => {

    const onChangeText = (text) => {
        searchItunes(text)
    }

    const RenderItem = ({ item }) => {
        return (
            <View style={styles.item}>
                <Image source={{uri: item.artworkUrl60}} style={{width:80, height:80}} />
                <View>
                    <Text style={styles.itemLabel}>{item.trackName}</Text>
                    <Text style={styles.itemSubLabel}>{item.artistName}</Text>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
           <View style={styles.inputContainer}>
               <TextInput onChangeText={onChangeText} placeholder="Escribe tu canción" />
           </View>
           <FlatList 
           style={{flex: 1}}
            data={tracks}
            renderItem={RenderItem}
           />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    item:{
        flexDirection:'row',
        padding: 10,
        backgroundColor: 'white'
    },
    itemLabel:{
        marginLeft: 10,
        fontSize: 20
    },
    itemSubLabel: {
        marginLeft: 10,
        fontSize: 14
    },
    inputContainer:{
        padding: 10
    }
})

export default ReduxScreen