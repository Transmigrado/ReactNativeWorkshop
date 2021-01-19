import React, { useState } from 'react'
import { View, StyleSheet, Text, Modal, TouchableOpacity, SafeAreaView } from 'react-native'
import Slider from '@react-native-community/slider'
import LottieView from 'lottie-react-native'
import PeopleLaptops from '../../assets/people_with_laptops.json'

const DemoComponentScreen = () => {

    const [sliderValue, setSliderValue] = useState(50)
    const [visibleModal, setVisibleModal] = useState(false)
    
    const onValueChange = value => {
        setSliderValue(5 * Math.floor(value / 5))
    }

    const showModal = () => {
        setVisibleModal(true)
    }

    const hideModal = () => {
        setVisibleModal(false)
    }
    
    return (
        <SafeAreaView style={styles.container}>

            <Modal
                transparent={true}
                visible={visibleModal}
                animationType="fade"
                >
                <View style={styles.overlay}>
                    <View style={styles.modalBox}>
                        <Text style={styles.title}>Bienvenidos</Text>
                        <Text>Hola a Todos, bienvenidos a nuestro Taller de React Native</Text>
                        <View style={styles.lottieContainer}>
                            <LottieView source={PeopleLaptops} autoPlay loop />
                        </View>
                        <TouchableOpacity onPress={hideModal}>
                            <Text>Saltar Bienvenida</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <TouchableOpacity onPress={showModal}>
                <Text>Mostrar Modal</Text>
            </TouchableOpacity>
          
           
            <View style={styles.componentContainer}>
                <Text>Kilometros de busqueda</Text>
                <Slider 
                    onValueChange={onValueChange} 
                    minimumValue={0}
                    maximumValue={100}
                    step={1}
                    minimumTrackTintColor="#FF9900"
                    maximumTrackTintColor="black"
                    thumbTintColor="#FF9900"
                    style={styles.slider} />
                <Text>{`${sliderValue} KM`}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    title:{
        fontSize: 20
    },
    overlay:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems:'center'
    },
    modalBox:{
        width: 320,
        backgroundColor:'white',
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 30,
        },
        shadowOpacity: 0.3,
        shadowRadius: 50,
        elevation: 3,
        padding: 20
    },
    lottieContainer:{
        height: 300,
        marginTop: 10
    },
    slider:{
     
    },
    componentContainer:{
        width: '100%',
        padding: 10,
        
    }
})

export default DemoComponentScreen