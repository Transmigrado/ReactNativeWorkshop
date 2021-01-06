import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const MainButton = ({ styleButton = 'STYLE_1', label}) => {

    const getStyle = () => {
        if(styleButton == 'STYLE_2'){
            return styles.style2
        }

        return {}
    }

    const getStyleLabel = () => {
        if(styleButton == 'STYLE_2'){
            return styles.label2
        }

        return {}
    }

    return (
        <TouchableOpacity style={[styles.container, getStyle()]}>
            <Text style={[styles.label, getStyleLabel()]}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 32,
        paddingVertical: 15,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 4
    },
    style2:{
        backgroundColor:'#3F5498',
        borderColor:'#6F7EB1',
        borderWidth: 1
    },
    label:{
        fontWeight:'bold',
        fontSize: 11,
        color:'#01305E'
    },
    label2:{
       color:'#FFFFFF' 
    }
})

export default MainButton