import React, {useState, useRef, useEffect} from 'react'
import {View, StyleSheet, Text, Button, Alert} from 'react-native'
import Card from '../components/Card'
import NumberContainer from '../components/NumberContainer'


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } else {
    return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    )

    const [rounds, setRounds] = useState(0)
    const currentLow=useRef(1)
    const currentHigh=useRef(100)

    const {userChoice, onGameOver} = props;
    useEffect(() => {
        if (currentGuess === props.userChoice) {
            onGameOver(rounds)
        }
    }, [currentGuess,userChoice, onGameOver])

    const nextGuessHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)) {
                Alert.alert('That\'s not true', "You know you can't trick a computer, right?", [
                    {text: 'Sorry, Not Allowed!!', style: 'cancel'}
                ])
                return;
        }

        if (direction === 'lower') {
            currentHigh.current = currentGuess
        }

        else {
            currentLow.current = currentGuess
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        setCurrentGuess(nextNumber)
        setRounds(curRounds => curRounds+1)
    }

    return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card stylee={styles.buttonContainer}>
            <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
            <Button title="GREATER" onPress={nextGuessHandler.bind(this, 'greater')} />
        </Card>
    </View>
    )
}

export default GameScreen;

const styles=StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%',

    }
})