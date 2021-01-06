
import React, { useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import HeaderNumber from '../../components/HeaderNumber'
import MainButton from '../../components/MainButton'


const HomeScreen = () => {

  useEffect(() => {
    console.log('HOLA')
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>

          <View style={{paddingHorizontal: 8}}>
            <View style={styles.backCard} />
          </View>
          <View style={styles.cardBlue}>
              <HeaderNumber
                title="Policy Number"
                number="1009820392"
              />
              <HeaderNumber
                  title="Named Insured"
                  number="Julian Hans Khanovic"
                  headerStyle="SMALL"
                />
              <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <HeaderNumber
                  title="Surrender Value"
                  number="$45.000"
                  headerStyle="SMALL"
                />
                <HeaderNumber
                  title="Policy Number"
                  number="$1.500"
                  headerStyle="SMALL"
                />
                <HeaderNumber
                  title="Policy Number"
                  number="09/08/2018"
                  headerStyle="SMALL"
                />
              </View>
              <View style={styles.containerButtons}>
                <MainButton label="Policy Detail" styleButton="STYLE_2" />
                <MainButton label="Make a payment" />
              </View>
            
          </View>

        </View>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  container:{
    flex : 1,
    paddingHorizontal: 30,
    alignItems:'center',
   
  },
  cardBlue:{
    backgroundColor: '#3F5498',
    borderRadius: 6,
  },
  containerButtons:{
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  backCard:{
    borderTopEndRadius: 6,
    borderTopStartRadius: 6,
    height: 15, 
    backgroundColor:'#2C3862', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,


  }
})

export default HomeScreen
