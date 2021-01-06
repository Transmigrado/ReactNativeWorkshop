import React from 'react'

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Example1Screen from './app/screens/Example1Screen'
import Example2Screen from './app/screens/Example2Screen'
import Example3Screen from './app/screens/Example3Screen'
import ModalScreen from './app/screens/ModalScreen'
import Modal2Screen from './app/screens/Modal2Screen'
import ListScreen from './app/screens/ListScreen'
import ListDetailScreen from './app/screens/ListDetailScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const HomeStack = createStackNavigator()
const MainStack = createStackNavigator()
const ModalStack = createStackNavigator()
const ListStack = createStackNavigator()
const Tabbar = createBottomTabNavigator()

const HomeStackScreen = () => {
  return <Tabbar.Navigator>
  <Tabbar.Screen name="HomeList" component={ListStackSceen} />
  <Tabbar.Screen name="Example2" component={Example2Screen} />
  <Tabbar.Screen name="Example3" component={Example3Screen} />
</Tabbar.Navigator>
}

const ModalStackSceen = () => {
  return <ModalStack.Navigator>
    <ModalStack.Screen name = "Modal1" component={ModalScreen} />
    <ModalStack.Screen name = "Modal2" component={Modal2Screen} />
  </ModalStack.Navigator>
}

const ListStackSceen = () => {
  return <ListStack.Navigator>
    <ListStack.Screen name = "List" component={ListScreen} />
    <ListStack.Screen name = "DetailList" component={ListDetailScreen} />
  </ListStack.Navigator>
}


const App = () => {
  return (
    <NavigationContainer >
      <MainStack.Navigator  mode="modal">
        <MainStack.Screen options={{headerShown: false}} name="Home" component={HomeStackScreen} />
        <MainStack.Screen  name="List" options={{title:'Mi Lista', headerShown: false}} component={ListStackSceen} />
        <MainStack.Screen options={{headerShown: false}} name="Modal" component={ModalStackSceen} />
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App
