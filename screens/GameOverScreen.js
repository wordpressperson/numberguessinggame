import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>You finally got the number {props.userNumber} after {props.guessRounds} rounds</Text>
            <Button title="TRY AGAIN" onPress={props.onNewGame} />
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})