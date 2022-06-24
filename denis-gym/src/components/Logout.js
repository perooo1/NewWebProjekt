import React from 'react';
import './Logout.css'
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, setDoc, doc } from "firebase/firestore";
import {useNavigate} from "react-router-dom";
import { getAuth,onAuthStateChanged, signOut } from 'firebase/auth';

export default function Logout() {


    const usersCollectionRef = collection(db,"users");

    const auth = getAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({});


    onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
      });
  


    const logout = async () =>{
        await signOut(auth);
        setTimeout(function(){
            navigate("../login");
        },1500);
    };

    logout();
    return (
            

                <div id="signedOut">
                    <h1>Uspješno ste se odjavili !</h1>
                </div>

    )

}