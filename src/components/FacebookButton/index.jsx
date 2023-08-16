import React, { useContext, useEffect } from 'react';
import { getAuth, FacebookAuthProvider, signInWithCredential } from 'firebase/auth/';
import { firebase } from '../../../config';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { LoginContext } from '../../contexts/LoginContext';
import CustomButton from '../CustomButton';

export default function FacebookButton() {
    const { user, setUser, setInitializing, initializing } = useContext(LoginContext);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    }

    useEffect(() => {
        const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber
    }, []);

    const handleFacebookLogin = async () => {
        console.log('Efetuando login');
        try {
            await LoginManager.logInWithPermissions(['public_profile', 'email']);
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                return;
            }
            const facebookCredential = FacebookAuthProvider.credential(data.accessToken);
            const auth = getAuth();
            const response = await signInWithCredential(auth, facebookCredential);
            console.log(response);
            console.log('credential --->', facebookCredential);
        } catch (error) {
            console.log(error);
        }
    }

    const handleFacebookLogout = async () => {
        console.log('Efetuando Logout');
        try {
            await firebase.auth().signOut();
            setUser(null);
        } catch (error) {
            console.log(error);
        }

        if (initializing) {
            return null;
        }
    }

    if (!user) {
        return (
            <CustomButton onPress={handleFacebookLogin} value={"Entrar com Facebook"} />
        )
    }else {
        return (
            <CustomButton onPress={handleFacebookLogout} value={"Encerrar Sessão"} />
        )
    }
}

