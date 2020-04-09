import React, {useState} from 'react'
import {View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native'
import Card from '../components/Card'
import Colors from '../constants/Colors'
import InputNumber from '../components/InputNumber'
import NumberContainer from '../components/NumberContainer'

const StartScreen = (props) => {
    const [numberValue, setNumberValue] = useState('')
    const [chosenNumberValue, setChosenNumberValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)

    const handleNumberValueChange = (input) => {
        setNumberValue(input.replace(/[^0-9]/g,''))
    }

    const handleReset = () => {
        setNumberValue('')
        setConfirmed(false)
    }

    const handleConfirmed = () => {
        const chosenNumber=parseInt(numberValue)
        if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber >99) {
            Alert.alert('Invalid Number', 'Number needs to be non-decimal between 1 and 99', 
            [{text: 'Okay', style: 'destructive', onPress: handleReset}]);
            return;  
        }
        setConfirmed(true);
        setChosenNumberValue(chosenNumber)
        setNumberValue('')
        Keyboard.dismiss();
    }

    let confirmedOutput
    if (confirmed) {
    confirmedOutput=(
    <Card stylee={styles.summaryContainer}>
        <Text>You entered</Text>
            <NumberContainer>{chosenNumberValue}</NumberContainer>
            <Button title="START GAME" onPress={()=>props.onStartGame(chosenNumberValue)}/>
    </Card>
    );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={styles.screens}>
                <Text style={styles.title}>Start a new game</Text>
                <Card stylee={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <InputNumber 
                        stylee={styles.input} 
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={handleNumberValueChange}
                        value={numberValue}
                    />
                    <View style={styles.buttonContainer}>
                            <View style={styles.btn}><Button title="Confirm" color="#c717fc" onPress={handleConfirmed} /></View>
                            <View style={styles.btn}><Button title="Reset" color={Colors.primary} onPress={handleReset} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartScreen;

const styles = StyleSheet.create({
    screens: {
        flex: 1,
        alignItems: 'center',
        padding: 10  
    }, 
    title: {
        fontSize: 30,
        marginVertical: 10
        
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },

    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },

    btn: {
        width: 100
    },

    input: {
        width: 50,
        textAlign: 'center'
    },

    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
})