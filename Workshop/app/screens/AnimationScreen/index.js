
import React, { useRef, useState } from 'react'
import { View, StyleSheet, Animated, Text, TouchableOpacity, Image } from 'react-native'
const cat1 = require('../../assets/cat1.png')
const cat2 = require('../../assets/cat2.png')
const cat3 = require('../../assets/cat3.png')

const totalProgress = '80%'



const ButtonImage = ({ source, parentLayout }) => {

    const [expand, setExpand] = useState(false)
    const [layout, setLayout] = useState({ x:0, y:0})
    const progress = useRef(new Animated.Value(0)).current 

    const onPress = () => {
        setExpand(true)

        Animated.timing(
            progress,
            {
              useNativeDriver: false,
              toValue: 1 ,
              duration: 500,
            }
          ).start()
    }

    const onLayout = (event) => {
        setLayout(event.nativeEvent.layout)
    }

    const width = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [100, parentLayout.width]
      })

    const height = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [100, parentLayout.width]
    })

    const left = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layout.x, 0]
    })
    
    const top = progress.interpolate({
        inputRange: [0, 1],
        outputRange: [layout.y, (parentLayout.height - parentLayout.width) / 2]
    })
    

    return (
        <>
        <TouchableOpacity onPress={onPress} onLayout={onLayout}>
            <Image source={source} style={styles.image}  />
        </TouchableOpacity>
        {expand && <Animated.Image source={source} style={[styles.expandImage, { width, height, left, top } ]}  />}
        </>
    )
}

const AnimationScreen = () => {

    const heightBox = useRef(new Animated.Value(200)).current 
    const shadowOpacity = useRef(new Animated.Value(0.1)).current 
    const progress = useRef(new Animated.Value(0.05)).current 
    const [layout, setLayout] = useState({ x:0, y:0, width: 100, height: 100})
    const [isOpen, setIsOpen] = useState(false)

    const expandBottomCard = () => {


        Animated.timing(
            progress,
            {
              useNativeDriver: false,
              toValue: 1 ,
              duration: 5000,
            }
          ).start()

        /*
        Animated.timing(
            shadowOpacity,
            {
              useNativeDriver: false,
              toValue: isOpen ? 0.1 :  0.4 ,
              duration: 500,
            }
          ).start()

        Animated.timing(
            heightBox,
            {
              useNativeDriver: false,
              toValue: isOpen ? 200 : 600,
              duration: 500,
            }
          ).start(() => {
            setIsOpen(!isOpen)
          })
          */
    }

    const showProgressBar = () => {

        const width = progress.interpolate({
            inputRange: [0, 1],
            outputRange: ['0%', totalProgress]
          })

        return (
            <View style={styles.containerProgressBar}>
                <View style={styles.parentBar}>
                    <Animated.View style={[styles.progressBar , { width }]} />
                </View>
            </View>
        )
    }

    const showBox = () => {
        return (
            <Animated.View style={[styles.box, { height: heightBox,  shadowOpacity: shadowOpacity }]}>
                <Text>Titulo</Text>
                <Text>Descripción</Text>
            </Animated.View>
        )
    }

    const onLayout = (event) => {
        setLayout(event.nativeEvent.layout)
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <View style={styles.gallery}>
                <ButtonImage source={cat1} parentLayout={layout} />
                <ButtonImage source={cat2} parentLayout={layout}  />
                <ButtonImage source={cat3} parentLayout={layout}  />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    box:{
        width:'100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        position: 'absolute',
        bottom: 0,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowRadius: 11.95,
        elevation: 18,
        paddingBottom: 100
    },
    containerProgressBar:{
        padding: 10
    },
    parentBar: {
        backgroundColor: '#CCC',
        borderRadius: 10,
        height: 20
    },
    progressBar:{
        backgroundColor: '#00CCDD',
        borderRadius: 10,
        height: 20
    },
    image: {
        width: 100,
        height: 100
    },
    expandImage:{
        width: 100,
        height: 100,
        position:'absolute',
        top:0,
        left:0
    },
    gallery:{
        flexDirection: 'row',
        padding: 20
    }
})

export default AnimationScreen