import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  
  const handleNewGame = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)   
    setGuessRounds(0)
  }

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds) 
  }

  let content = <StartScreen onStartGame={startGameHandler}/>

  if (userNumber && guessRounds <= 0){
    content=<GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
  }

  else if (guessRounds > 0) {
    content=<GameOverScreen userNumber={userNumber} guessRounds={guessRounds} onNewGame={handleNewGame}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Number Guessing App" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
