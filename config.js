import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIpYxhqyqkTlpiLEz66wr3ESEctX872K4",
    authDomain: "teste-lib-20257.firebaseapp.com",
    projectId: "teste-lib-20257",
    storageBucket: "teste-lib-20257.appspot.com",
    messagingSenderId: "805097742671",
    appId: "1:805097742671:web:bf234f43c4b3319302e53a"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};

export { firebase };
