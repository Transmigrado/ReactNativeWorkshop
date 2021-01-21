import React, { useEffect, useRef } from 'react'
import { View, StyleSheet, Animated } from 'react-native'
import PropTypes from 'prop-types'
import { sumProp } from '../../utils'

const GraphBar = ( { item, maxValue, index }) => {

    const progress = useRef(new Animated.Value(0)).current 
    const itemTotalCal = sumProp(item)
    const height =  `${itemTotalCal / maxValue * 90}%`
    const heightCarbs =  `${item.carbs / itemTotalCal * 100}%`
    const heightFat =  `${item.fat / itemTotalCal * 100}%`
    const heightProtein =  `${item.protein / itemTotalCal * 100}%`

    const heightInterpolate = progress.interpolate({
        inputRange: [0, 1],
        outputRange: ['0%', height]
      })

    useEffect(() => {
        Animated.timing(
            progress,
            {
                useNativeDriver: false,
                toValue: 1 ,
                duration: 500,
                delay: index * 50,
            }
        ).start()
    } , [])

    return (
        <Animated.View style={[styles.container, { height: heightInterpolate }]}>
            <View style={[styles.boxCarbs, { height: heightCarbs}]} />
            <View style={[styles.boxFat, {height: heightFat}]} />
            <View style={[styles.boxProtein, { height: heightProtein}]} />
        </Animated.View>
    )
}


GraphBar.prototype = {
    item: PropTypes.shape({
        carbs: PropTypes.number,
        protein: PropTypes.number,
        fat: PropTypes.number
    }).isRequired
}


const styles = StyleSheet.create({
    container:{
        width: 24,
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 2,
    },
    boxProtein:{
        backgroundColor: '#0096FE',
        width:'100%',
        height: '34%',
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8
    },
    boxFat:{
        backgroundColor: '#EE89F0',
        width:'100%',
        height: '33%'
    },
    boxCarbs:{
        backgroundColor: '#FFE06C',
        width:'100%',
        height: '33%',
        borderTopEndRadius: 8,
        borderTopStartRadius: 8
    }
})

export default GraphBar