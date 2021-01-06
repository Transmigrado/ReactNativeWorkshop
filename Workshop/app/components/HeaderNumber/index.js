
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeaderNumber = ({ title, number, headerStyle = 'BIG'}) => {
    return (
        <View style={styles.cardHeader}>
            <Text style={[styles.title, {fontSize: headerStyle === 'BIG' ? 12 : 9}]}>{title}</Text>
            <Text style={[styles.numberDescription, {fontSize: headerStyle === 'BIG' ? 20 : 14}]}>{number}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardHeader:{
      alignSelf:'baseline',
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

