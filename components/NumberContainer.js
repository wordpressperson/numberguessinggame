import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Colors from '../constants/Colors';

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.children}</Text>
        </View>
    )
}

export default NumberContainer;

const styles=StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    number: {
        color: Colors.secondary,
        fontSize: 22
    }
})