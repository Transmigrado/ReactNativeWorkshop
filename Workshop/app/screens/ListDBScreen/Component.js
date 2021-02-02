import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'


const ListDBScreen = ({ fetch, add, people }) => {

    useEffect(() => {
        fetch()
    }, [])

    const onPress = () => {
        add({
            name:'Jorge',
            lastName: 'Acosta',
            age: Math.floor(Math.random() * 100),
            uid: Date.now(),
        })
        fetch()
    }

    const RenderItem =  ({ item }) => {
        return (
            <View style={{flex: 1, padding: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
           
            <FlatList
style={{flex: 1}}
                data={people}
                renderItem={({ item }) => <RenderItem item={item} />}
                />
          
            <TouchableOpacity onPress={onPress}>
                <Text>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ListDBScreen