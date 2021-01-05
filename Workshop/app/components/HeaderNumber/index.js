
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeaderNumber = ({ title, number}) => {
    return (
        <View style={styles.cardHeader}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.numberDescription}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeader:{
      backgroundColor:'rgba(0,0,0,0.08)',
      paddingVertical: 15,
      paddingHorizontal: 20
    },
    title:{
      color:'#FFFFFF',
      opacity: 0.7,
      fontSize: 12
    },
    numberDescription:{
      color:'#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    }
  })

export default HeaderNumber

