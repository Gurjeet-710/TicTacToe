import { View, Text ,StyleSheet,ScrollView} from 'react-native'
import React from 'react'
import Test from './components/Test'
import SearchBar from './components/SearchBar'
import PlaceInfo from './components/places/PlaceInfo'
import Shimla from './components/places/Shimla'
import Jaipur from './components/places/Jaipur'
import JandK from './components/places/JandK'

const App = () => {
  return (
    <View>
      <ScrollView>
      <Text style={{fontSize:8}}>made by Gurjeet Singh</Text>
      <Text style={styles.Heading}>
      TOURISUM</Text>
      <SearchBar />
      <Test />
      
      </ScrollView>
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