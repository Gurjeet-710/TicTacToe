
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'



function TicTacToeX ({navigation}) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
 

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handlePress = (index) => {
    if (winner || board[index]) return;
   
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const renderSquare = (index) => (
    <TouchableOpacity style={styles.square} onPress={() => handlePress(index)}>
      <Text style={styles.squareText}>{board[index]}</Text>
    </TouchableOpacity>
  );

  return (
      <View style={{flex:1 , backgroundColor: 'red', }}>
      
        <StatusBar  barStyle={'light-content'} backgroundColor={'black'}  ></StatusBar>
        
      <View style={styles.Banner}>
      <Text style={styles.title}>Tic Tac Toe</Text>
      </View >
      <View style={styles.container}>
      <View style={styles.board}>
        {board.map((_, index) => renderSquare(index))}
      </View>
      {winner ? <Text style={styles.winnerText}>Winner: {winner}</Text> : null}
      <TouchableOpacity 
          style={styles.resetButton} 
          onPress={resetGame}>
        <Text style={styles.resetButtonText}> Restart Game </Text>
      </TouchableOpacity>
      
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

   justifyContent: 'center',
    alignItems: 'center',
   
    flex:0.70,
  },


  Banner:{
    flex:0.07,
    width:'90%',
    // height:10,
    backgroundColor:'#0A3D62',         
    margin:30,
    marginTop:30,
    borderRadius:15,
    borderBottomRightRadius:80,
    borderTopLeftRadius:80 ,
    elevation:9  
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    marginTop:1,
    textAlign:'center',
    
    
  },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#6a4dc8', 
    borderRadius: 20, 
    padding: 10,
    elevation: 5,
  },
  square: {
    width: '29%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: '#774dc8', 
    borderRadius: 15,
    margin: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
  },
  squareText: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom:"5%"
  },
  resetButton: {
    marginTop: 50,
    marginBottom:'-10%',
    padding: 15,
    backgroundColor: '#ff6f61',
    borderRadius: 25, 
    elevation: 9, 
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default TicTacToeX;
