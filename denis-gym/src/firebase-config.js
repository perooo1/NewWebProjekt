// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD93cO9sfOUl5352aFSFo4UpDGiEKUmPkg",
  authDomain: "webprojektnovabaza.firebaseapp.com",
  projectId: "webprojektnovabaza",
  storageBucket: "webprojektnovabaza.appspot.com",
  messagingSenderId: "145083522697",
  appId: "1:145083522697:web:166e4de06a73451f243058",
  measurementId: "G-E4JB6WZKEQ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const firebase = app.firebase;


