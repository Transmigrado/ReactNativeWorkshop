import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import GraphBar from './GraphBar'
import PropTypes from 'prop-types'

const datos = [1,2,3,4,5]

const datosDobles = datos.map( (e, i) => e * 2) // [2,4,6,8,10]

const Graph = ({ data, maxValue }) => {

    const numbers = Array.apply(1, Array(5)
                        ).map((e, i) => i * maxValue / 4)
                        .reverse()
   
    return (
        <View style={styles.container}>
            <View style={styles.numbers}>
                {numbers.map( item => <Text style={styles.text}>{item}</Text> )}
            </View>
            <View style={styles.containerBar}>
                {data.map( (item, index) => <GraphBar item={item} maxValue={maxValue} index={index} /> )}
            </View>
        </View>
    )
}

Graph.prototype = {
    maxValue: PropTypes.number,
    data: PropTypes.arrayOf(PropTypes.shape({
        carbs: PropTypes.number,
        protein: PropTypes.number,
        fat: PropTypes.number
    })).isRequired
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        flexDirection: 'row',
        backgroundColor: '#F5F5F5',
        alignItems:'flex-end',
        borderBottomColor: '#CCC',
        borderBottomWidth: 1
    },
    containerBar:{
        flex: 1,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'flex-end'
    },
    numbers:{
        width: 50,
        height: '90%',
        flexDirection: 'column',
        justifyContent:'space-between',
        padding: 5,
    },
    text: {
        textAlign:'center'
    }
})

export default Graph