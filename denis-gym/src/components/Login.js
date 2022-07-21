import React from 'react';
import './Login.css'
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { BrowserRouter as Router, Routes, Route, useNavigate} from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from 'firebase/auth';


export default function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usersCollectionRef = collection(db,"users");
    const [errorMessage, setErrorMessage] = useState('');

    const auth = getAuth();
    const navigate = useNavigate();


    const login = async () =>{
            signInWithEmailAndPassword(auth,email,password)
            .then( (userCredential) =>{
                const user = userCredential.user;
                const uid = user.uid
                console.log("login try block");
                setErrorMessage("");

                navigate("../", {state:{name: "username", expDate:""}});
            })
        .catch((error) =>{
            console.log("login catch block");
            setErrorMessage("Error wrong email or password");
            console.log(error.message);
        })
    };

    return (
        <div className="form container">
            
                <div className="input-container">
                    <label>Email </label>
                    <input onChange={(event) => {
                        setEmail(event.target.value);
                    }} type="text" name="uname" required />

                </div>
                <div className="input-container">
                    <label>Zaporka </label>
                    <input onChange={(event) => {
                        setPassword(event.target.value);
                    }} type="password" name="pass" required />

                </div>
                

                    <button onClick={login}>Prijavi se</button>

                    <div className='noAccMsg'>Ako nemate korisnički nalog kliknite <a href='./register' id='regHere' > ovdje</a></div>
                    {errorMessage && (<p className='error'>{errorMessage}</p>)}

        </div>


    )

}