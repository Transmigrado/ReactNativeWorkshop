/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native'

import HeaderNumber from './app/components/HeaderNumber'
import MainButton from './app/components/MainButton'


const App = () => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.cardBlue}>
              <HeaderNumber
                title="Policy Number"
                number={1009820392}
              />
              <View style={styles.containerButtons}>
                <MainButton styleButton="STYLE_2" />
                <MainButton />
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
  },
  cardBlue:{
    backgroundColor: '#3F5498',
    borderRadius: 6,
  },
  containerButtons:{
    padding: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  }
})

export default App
