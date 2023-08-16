import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton({onPress, value, color, background, sx}) {
    
    const styles = StyleSheet.create({
        btn_container: {
            backgroundColor: background ? background : "#4167b2",
            paddingHorizontal: 30,
            paddingVertical: 15,
            marginTop: 30,
            alignItems: 'center',
            justifyContent: 'center'
        },
        btn_text: {
            color: color? color : '#fff',
        }
    })

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.btn_container, sx]}
        >
            <Text style={styles.btn_text}>{value}</Text>
        </TouchableOpacity>
    )
}