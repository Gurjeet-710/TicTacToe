import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'

import TicTacToe from './src/TicTacToeX'
import Home from './src/Home'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'HOME'}}
          
        />
        <Stack.Screen
          name='TicTacToeX'
          component={TicTacToe}
          />
          <Stack.Screen
          name='TicTacToeO'
          component={TicTacToe}
          />

      </Stack.Navigator>
    </NavigationContainer>
  
  //   <View style={{flex:1}}>
  //     <TicTacToe />
  //     <Home />
  //  </View>
 
  )
}
export default App