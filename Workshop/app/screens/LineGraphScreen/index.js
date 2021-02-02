
import React, { useState} from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Polygon, Polyline, Circle } from 'react-native-svg'


const DATA = [
    100,
    130,
    360,
    280,
    350,
    120,
    400,
    600,
    550,
    320
]

const LineGraphScreen = () => {

    const [layout, setLayout] = useState({ width: 300, height:200, x:0,y:0})

    const line =  DATA.map( (value, index) => `${index * (layout.width / (DATA.length - 1))},${200  - 200 * (value * 100 / 1000) / 100}` )
    const dataFormat = [...line,`${layout.width},200`,`0,200`]
    
    const onLayout = ({ nativeEvent }) => {
        setLayout(nativeEvent.layout)
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <View style={styles.graphContainer}>
                <Svg height="200" width={`${layout.width}`}>
                    
                    <Polygon
                        points={dataFormat.join(' ')}
                        fill="white"
                        stroke="transparent"
                        strokeWidth="1"
                    />
                    <Polyline
                        points={line.join(' ')}
                        fill="none"
                        stroke="blue"
                        strokeWidth="2"
                    />
                    {line.map(item => item.split(',')).map( item => <Circle cx={item[0]} cy={item[1]} r="4" fill="white" stroke="blue" />)}
                    
                </Svg>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white'
    },
    graphContainer:{
        backgroundColor: '#F5F5F5'
    }
})

export default  LineGraphScreen
