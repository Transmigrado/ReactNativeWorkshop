import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Graph from '../../components/Graph'
import { calculateMaxValue } from '../../utils'

const data = [
    {
        fat: 600,
        protein: 500,
        carbs: 1200
    },
    {
        fat: 700,
        protein: 100,
        carbs: 900
    },
    {
        fat: 600,
        protein: 300,
        carbs: 1000
    },
    {
        fat: 800,
        protein: 370,
        carbs: 1000
    },
    {
        fat: 350,
        protein: 580,
        carbs: 1100
    },
    {
        fat: 100,
        protein: 370,
        carbs: 1000
    },
    {
        fat: 350,
        protein: 580,
        carbs: 440
    }
]

const GraphScreen = () => {

    return (
        <View style={styles.container}>
            <Graph 
                data={data}
                maxValue={calculateMaxValue(data)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default GraphScreen