import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import FacebookButton from './../../components/FacebookButton/index';
import { LoginContext } from '../../contexts/LoginContext';

export default function Lobby() {
    const { user } = useContext(LoginContext);

    console.log(user);
    console.log(user.email)

    return (
        <View style={styles.container}>
            <Image source={{uri: user.photoURL}} style={{margin: 20}} width={100} height={100}/>
            <Text>Olá {user.displayName}!</Text>
            <Text>seu facebook email: {user.email}!</Text>
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
});