import React, {useState} from 'react'
import {View, Text, StyleSheet, ShadowPropTypesIOS} from 'react-native'
import Colors from '../constants/Colors'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headertitle}>{props.title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center'

    },

    headertitle: {
        color: 'black',
        fontSize: 18
    }
})