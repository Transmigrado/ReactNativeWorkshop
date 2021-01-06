import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Example1Screen from './app/screens/Example1Screen'
import Example2Screen from './app/screens/Example2Screen'
import Example3Screen from './app/screens/Example3Screen'
import ModalScreen from './app/screens/ModalScreen'
import Modal2Screen from './app/screens/Modal2Screen'

const HomeStack = createStackNavigator()
const MainStack = createStackNavigator()
const ModalStack = createStackNavigator()


const HomeStackScreen = () => {
  return <HomeStack.Navigator>
  <HomeStack.Screen name="Example1" component={Example1Screen} />
  <HomeStack.Screen name="Example2" component={Example2Screen} />
  <HomeStack.Screen name="Example3" component={Example3Screen} />
</HomeStack.Navigator>
}

const ModalStackSceen = () => {
  return <ModalStack.Navigator>
    <ModalStack.Screen name = "Modal1" component={ModalScreen} />
    <ModalStack.Screen name = "Modal2" component={Modal2Screen} />
  </ModalStack.Navigator>
}


const App = () => {
  return (
    <NavigationContainer >
      <MainStack.Navigator  mode="modal">
        <MainStack.Screen options={{headerShown: false}} name="Home" component={HomeStackScreen} />
        <MainStack.Screen options={{headerShown: false}} name="Modal" component={ModalStackSceen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App
