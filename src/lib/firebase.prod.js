import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAoMmr1ZBmsc1on_FkbgqEsoFgIwqciYk",
    authDomain: "netflix-e6aae.firebaseapp.com",
    databaseURL: "https://netflix-e6aae.firebaseio.com",
    projectId: "netflix-e6aae",
    storageBucket: "netflix-e6aae.appspot.com",
    messagingSenderId: "1007534261719",
    appId: "1:1007534261719:web:46afd39aaa39f87ff37792"
};

const firebase = Firebase.initializeApp(config);

export { firebase };