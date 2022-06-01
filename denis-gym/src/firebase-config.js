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
    apiKey: "AIzaSyA52eVpAWcpPizl2p47fZ-1mCsdvbLmd10",
    authDomain: "web-projekt-71e4e.firebaseapp.com",
    projectId: "web-projekt-71e4e",
    storageBucket: "web-projekt-71e4e.appspot.com",
    messagingSenderId: "791437659700",
    appId: "1:791437659700:web:26d60cbcca7a7fc5138461",
    measurementId: "G-SNE86WNZ9R"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


