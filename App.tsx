import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'

import TicTacToe from './src/TicTacToe'


const App = () => {
  return (
   
    <View style={{flex:1}}>
      <TicTacToe />
   </View>
   
  )
}
export default App