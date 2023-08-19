import {initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import axios from "axios";

const firebaseConfig = {
    apiKey: "AIzaSyDboieohkGj8_Mfr8TKz7jufQeDBLfqKgQ",
    authDomain: "junction-asia-505c1.firebaseapp.com",
    projectId: "junction-asia-505c1",
    storageBucket: "junction-asia-505c1.appspot.com",
    messagingSenderId: "113840531041",
    appId: "1:113840531041:web:8c81b77043cc5a0d7e2c20"
};



export const FIREBASE_APP = initializeApp(firebaseConfig);

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

signOut(FIREBASE_AUTH).then(() => {
    console.log("signed out")
})


const requestInterceptor = axios.interceptors.request.use(async (config) => {
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

onAuthStateChanged(FIREBASE_AUTH, (user) => {
    if (user) {
        console.log("FIREBASE: the user is present: ", user)
    } else {
        console.log("FIREBASE: the user is not present")
    }
})

