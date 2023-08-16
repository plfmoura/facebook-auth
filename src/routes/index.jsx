import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import Login from '../screens/Login';
import Lobby from '../screens/Lobby';
import { LoginContext } from '../contexts/LoginContext';

const Stack = createNativeStackNavigator();

export default function Routes() {
    const { user } = useContext(LoginContext);

    return (
        <Stack.Navigator>
            {
                !user ?
                    <Stack.Screen name='login' component={Login} />
                    :
                    <Stack.Screen name='lobby' component={Lobby} />
            }
        </Stack.Navigator>
    )
}
