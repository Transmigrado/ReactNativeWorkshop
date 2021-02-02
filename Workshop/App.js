import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './app/redux/store'
import RootNavigator from './app/screens/RootNavigator'

const App = () => {


  return (
    <Provider store={store} >
        <RootNavigator />
    </Provider>
  )
}

export default App
