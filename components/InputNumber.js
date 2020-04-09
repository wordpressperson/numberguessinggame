import React from 'react'
import {StyleSheet, TextInput} from 'react-native'

const InputNumber = (props) => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.stylee}} />
    )
}

export default InputNumber;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        marginVertical: 10,
        borderBottomWidth: 1
    }
})