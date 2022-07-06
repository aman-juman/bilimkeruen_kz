import {initializeApp} from "firebase/app";
import {getStorage} from 'firebase/storage';
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCPTPn6HFm6xZPfOwwQ8bU1pryM06DKfRc",
    authDomain: "bilimkeruen.firebaseapp.com",
    databaseURL: "https://bilimkeruen-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bilimkeruen",
    storageBucket: "bilimkeruen.appspot.com",
    messagingSenderId: "572304694976",
    appId: "1:572304694976:web:c1581c9a9a3a1e95af5725",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
const storage = getStorage(app);
const db = getFirestore(app);

export {storage, db, auth}