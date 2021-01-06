import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const ListDetailScreen = ({ route }) => {
    return (
        <View>
            <Text style={styles.title}>{route.params.title}</Text>
            <Text style={styles.description}>{route.params.description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30
    },
    description:{
        fontSize: 16
    }
})

export default ListDetailScreen