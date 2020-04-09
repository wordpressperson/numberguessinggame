import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = (props) => {
    return (
    <View style={{...styles.card, ...props.stylee}}>{props.children}</View>
    )
}

export default Card;

const styles= StyleSheet.create({
    card: {
        shadowColor: 'black', //ios only
        shadowOffset: {width: 0, height: 3}, //ios only
        shadowRadius: 6,  //ios only
        shadowOpacity: 0.24,  //ios only
        elevation: 5,  //android only
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    }
})