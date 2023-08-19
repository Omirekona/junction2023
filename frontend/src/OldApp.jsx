import React from 'react'
import {useEffect, useState} from 'react';

import "./App.css";

import {initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBcfQavhzSDy3-rt0SmpIXppEERlj5D7XM",
    authDomain: "junction2023.firebaseapp.com",
    projectId: "junction2023",
    storageBucket: "junction2023.appspot.com",
    messagingSenderId: "664798833853",
    appId: "1:664798833853:web:61ad23f72a36d830665bd4"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//dev
const App = () => {
    const [hello, setHello] = useState("");

    useEffect(() => {
        fetch("/api/hello").then(response => response.text()).then((finalResponse) => setHello(finalResponse))
    }, []);

    return (
        <div className='text-3xl font-bold underline'> the response from server is: {hello} yay seeming works now lol wow</div>
    )
}

export default App;
