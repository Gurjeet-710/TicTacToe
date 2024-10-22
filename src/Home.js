import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

import {LinearGradient} from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TicTacToe from './TicTacToeX'


export default function Home( {navigation}) {
  return (
    <View style={styles.Container}>
    {/* <LinearGradient 
           color={['#67E6DC','#218F76']} 
           style={styles.Grading} > */}

    {/* <View style={styles.Container}>    */}
   <Text style={styles.Heading} >TIC TAC TOE</Text>
       <View style={styles.Card}>
            <Text style={styles.Txt}>Pick whoes goes first</Text>
            <View  style={{alignItems:'center'}} >
            <ScrollView horizontal={true} >
            <TouchableOpacity 
                onPress={() => navigation.navigate('TicTacToeX')}  
                >
               <View style={styles.TxtButton}>
                <Text style={styles.TxtOpt}>X</Text>
               </View>
               </TouchableOpacity>

          <TouchableOpacity 
                onPress={() => navigation.navigate('TicTacToeO')}>
                <View style={styles.TxtButton}>
                  <Text style={styles.TxtOpt}>O</Text>
                </View>
         </TouchableOpacity>
          
           </ScrollView>
           </View>
       </View>
    {/* </View> */}
    {/* </LinearGradient> */}
</View>
    
  )
}



const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    Grading:{
        width: '100%',
        height: '100%',
        opacity: 0.95,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Heading:{
        flex:0.5,
        fontSize:100,
       
        fontWeight:'bold',
        textAlign:'center',
        padding:5,
        color:'#8e44ad',
        textShadowRadius:10,
        textShadowColor:'#FFF222',

    },
    Card:{
        flex:0.5,
        // width:'110%',
        maxWidth:'100%',
        height:'100%',
        backgroundColor:'#cdd1f4',
        borderTopEndRadius:160,
        borderTopLeftRadius:160

    },
    Txt:{
        fontSize:20,
        color:'#043b5c',
        textAlign:'center',
        fontWeight:'700',
        padding:20,
        marginTop:15

    },
    TxtOpt:{
        flex:1,
        fontSize:30,
        fontWeight:'bold',
        marginTop:8,
        color:'white',
        textAlign:'center',
        justifyContent:'center'
        
    },
    TxtButton:{
        width:70,
        height:70,
        borderWidth:3,
        borderColor:"#043b5c",
        backgroundColor:'#8e44ad',
        borderRadius:50,
        margin:35,
        overflow:'visible'
    },
    
})