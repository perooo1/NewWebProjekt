// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCqKO2JqiONImyefHh-jwA1AUJrrc0st2I",
    authDomain: "webprojekt-6be1b.firebaseapp.com",
    projectId: "webprojekt-6be1b",
    storageBucket: "webprojekt-6be1b.appspot.com",
    messagingSenderId: "286166425831",
    appId: "1:286166425831:web:90af6b1db6176d92848242",
    measurementId: "G-F2BY8VW8FR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebase = app.firebase;


