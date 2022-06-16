import React from 'react';
import './Register.css'
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import { async } from '@firebase/util';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from 'firebase/auth';


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const usersCollectionRef = collection(db,"users");

    const auth = getAuth();

    const register = async () =>{
        try{
            createUserWithEmailAndPassword(auth,email,password)
            .then( (userCredential) =>{
                const user = userCredential.user;
                const uid = user.uid
                console.log("register try block");
                console.log(user.uid);
                
                //ovdje kreiramo dokument tog korisnika u kolekciji users s jednakim uid kao iz auth
                
                setDoc(doc(db, "users",uid), {
                    email: email,
                    password: password,
                    username: username
                  });


            }

            )
        }
        catch(error){
            console.log("register catch block");
            console.log(error.message);
        }
    };

/*
    const Register = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                getAuth(), email, password
            );
            console.log("try block");
            console.log(user.username);

        } catch (error) {
            console.log("catch block");
            console.log(error.message);
        }
    };
*/

    const logout = async () => { }

    const [users, setUsers] = useState([]);
    //const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
               setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }


        getUsers();
    }, []);

    return (
        <div className="form">
                <div className="input-container">
                    <label>Email </label>
                    <input onChange={(event) => {
                        setEmail(event.target.value);
                    }} type="text" name="uname" required />

                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input onChange={(event) => {
                        setPassword(event.target.value);
                    }} type="password" name="pass" required />

                </div>
                <div className="input-container">
                    <label>Username </label>
                    <input onChange={(event) => {
                        setUsername(event.target.value);
                    }} type="text" name="uname" required />

                </div>

                    <button onClick={register}>Register</button>

        </div>
    )

}