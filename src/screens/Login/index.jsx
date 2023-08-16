import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import FacebookButton from '../../components/FacebookButton'
import CustomButton from '../../components/CustomButton';

export default function Login() {

    return (
        <View style={styles.container}>
            <Text>Welcome to Facebook SignIn!</Text>
            <TextInput placeholder='username' style={styles.input} />
            <TextInput placeholder='password' style={styles.input} keyboardType='numeric' />
            <CustomButton sx={{ width: 195 }} background={"#333"} onPress={() => alert('Não funcional')} value={"Entrar"} />
            <FacebookButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: 190,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        backgroundColor: '#fff'
    }
});