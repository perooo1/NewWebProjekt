import React, { createContext } from 'react';
import './Register.css'
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDoc, getDocs, addDoc, setDoc, doc, CollectionReference } from "firebase/firestore";
import { async } from '@firebase/util';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const usersCollectionRef = collection(db,"users");
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorUsernameMessage, setErrorUsernameMessage] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
    const [isValid, setIsValid] = useState(true)
  
    const auth = getAuth();

    const navigate = useNavigate();



    const register = async () =>{
        try{
            if(checkUserIsValidForRegistration()){
            
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


                  navigate("../login");
            }

            )
        } else{
            console.log("User can't be created")

        }
    } 
        catch(error){
            console.log("register catch block");
            console.log(error.message);
        }

    };


    return (
        <div className="form container ">
                <div className="input-container">
                    <label>Email </label>
                    <input onBlur={(event) => {
                        checkEmailValid(event.target.value);
                        checkEmailAlreadyExists(event.target.value);
                    }} type="text" name="uname" required />
                     {errorEmailMessage && (<p className='error'>{errorEmailMessage}</p>)}

                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input onChange={(event) => {
                        checkPassword(event.target.value);
                    }} type="password" name="pass" required />
                     {errorPasswordMessage && (<p className='error'>{errorPasswordMessage}</p>)}

                </div>
                <div className="input-container">
                    <label>Username </label>
                    <input onBlur={(event) => {
                        checkUsernameAlreadyExists(event.target.value);
                    }} type="text" name="uname" required />
                    {errorUsernameMessage && (<p className='error'>{errorUsernameMessage}</p>)}

                </div>

                    <button onClick={register}>Register</button>
                   
        </div>
    )
    function checkEmailValid( email ){
        
       
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if ( re.test(email) ) {
            setEmail(email);
            setErrorEmailMessage("")
            return true;
        }
        else {
            setErrorEmailMessage("Email is invalid")
            return false;
        }
    
    }

    function checkEmailAlreadyExists(email){
        getDocs(usersCollectionRef).then((response) =>{
            
            response.docs.map((item) =>{
                    if(email ==item.data().email){
                        setErrorEmailMessage("User with that email already exists")
                        setIsValid(false)
                    }
                })
        })
        return isValid;
    }

    function checkPassword(password){
        if(password.length<6){
            setErrorPasswordMessage("Password must be atleast 6 charachters long");
            return false;
        } else{
            setErrorPasswordMessage("");
            setPassword(password);
            return true;
        }
    }
    
    function checkUsernameAlreadyExists(username){

        getDocs(usersCollectionRef).then((response) =>{
                response.docs.map((item) =>{
                    if(username ==item.data().username){
                        setErrorUsernameMessage("User with that username already exists")
                        setIsValid(false)
                    }else{
                        setErrorUsernameMessage("");
                        setUsername(username);
                    }
                })
        })

        return isValid;
    }

    function checkUserIsValidForRegistration(){
        checkEmailAlreadyExists(email);
        if(checkEmailAlreadyExists(email) && checkEmailValid(email) 
            && checkPassword(password) && checkUsernameAlreadyExists(username)){
                return true;
            }
            else{
                return false
            }
        }

     
}

