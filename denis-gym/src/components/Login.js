import React from 'react';
import 'D:/Labosi2021/WEB/denis-gym/src/components/Login.css'
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");


    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                getAuth, email, password
            );
            console.log(user.username);

        } catch (error) {
            console.log(error.message);
        }
    };

    const logout = async () => { }

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

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
                    <label>Username </label>
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

                    <button onClick={login}>Login</button>

        </div>
    )

}