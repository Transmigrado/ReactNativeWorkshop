import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Example1Screen from '../Example1Screen'
import Example2Screen from '../Example2Screen'
import Example3Screen from '../Example3Screen'
import ModalScreen from '../ModalScreen'
import Modal2Screen from '../Modal2Screen'
import ListScreen from '../ListScreen'
import ListDetailScreen from '../ListDetailScreen'
import HomeScreen from '../HomeScreen'



const HomeStack = createStackNavigator()
const MainStack = createStackNavigator()
const ModalStack = createStackNavigator()
const ListStack = createStackNavigator()
const Tabbar = createBottomTabNavigator()
const DrawerLayout = createDrawerNavigator()

const HomeStackScreen = () => {
  return <DrawerLayout.Navigator>
  <DrawerLayout.Screen name="HomeList" component={HomeScreen} />
  <DrawerLayout.Screen name="Example2" component={Example2Screen} />
  <DrawerLayout.Screen name="Example3" component={Example3Screen} />
</DrawerLayout.Navigator>
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


const RootNavigator = () => {
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

export default RootNavigator