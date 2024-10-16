import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'

import TicTacToe from './src/TicTacToe'


const App = () => {
  return (
    <View>
      <TicTacToe />
    

   </View>
  )
}

const styles = StyleSheet.create({
Heading:{
  textAlign: 'center',
  fontSize: 24,
  fontWeight:'bold',
  color:'black',
  fontStyle:'italic' 
},
})

export default App