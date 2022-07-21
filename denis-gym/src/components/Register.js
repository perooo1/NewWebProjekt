import React, { createContext, useRef } from 'react';
import './Register.css'
import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs,setDoc, doc, Timestamp } from "firebase/firestore";
import { async } from '@firebase/util';
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';


export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const confPass = useRef(null);
    const pass = useRef(null);
    const usersCollectionRef = collection(db,"users");
    const [errorEmailMessage, setErrorEmailMessage] = useState('');
    const [errorUsernameMessage, setErrorUsernameMessage] = useState('');
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
    const [errorSamePasswordMessage, setErrorSamePasswordMessage] = useState('');
    const [isValid, setIsValid] = useState(true);
    const auth = getAuth();


    const navigate = useNavigate();



    const register = async () =>{
        try{

            if(checkUserIsValidForRegistration() && checkConfirmPassword()){
                const date = new Date().toISOString()

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
                    username: username,
                    expDate: date
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
                    <label>Zaporka </label>
                    <input ref = {pass} type="password" name="pass" required />
                     {errorPasswordMessage && (<p className='error'>{errorPasswordMessage}</p>)}

                </div>
                <div className="input-container">
                    <label>Potvrdi zaporku </label>
                    <input ref = {confPass} type="password" name="confPass" required />
                     {errorSamePasswordMessage && (<p className='error'>{errorSamePasswordMessage}</p>)}

                </div>

                <div className="input-container">
                    <label>Korisničko ime </label>
                    <input onBlur={(event) => {
                        checkUsernameAlreadyExists(event.target.value);
                    }} type="text" name="uname" required />
                    {errorUsernameMessage && (<p className='error'>{errorUsernameMessage}</p>)}

                </div>

                    <button onClick={register}>Registriraj se</button>
                   
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
            setErrorEmailMessage("Email nije ispravan")
            return false;
        }
    
    }

    function checkEmailAlreadyExists(email){

        getDocs(usersCollectionRef).then((response) =>{
            
            response.docs.map((item) =>{
                    if(email ==item.data().email){
                        setErrorEmailMessage("Korisnik s tim email-om već postoji")
                        setIsValid(false)
                    }
                })
        })
        return isValid;
    }

    function checkPassword(){
        if(pass.current.value.length<6){
            setErrorPasswordMessage("Zaporka mora sadržavati najmanje 6 znakova");
            return false;
        } else{
            setErrorPasswordMessage("");
            setPassword(pass.current.value);
            return true;
        }
    }


    
    function checkUsernameAlreadyExists(username){

        getDocs(usersCollectionRef).then((response) =>{
                response.docs.map((item) =>{
                    if(username ==item.data().username){
                        setErrorUsernameMessage("Korisničko ime je zauzeto")
                        setIsValid(false)
                    }else{
                        setErrorUsernameMessage("");
                        setUsername(username);
                    }
                })
        })

        return isValid;
    }

    function checkConfirmPassword(){
        if(pass.current.value === confPass.current.value){
            setErrorSamePasswordMessage("");
            return true;
        } else{
            setErrorSamePasswordMessage("Zaporka i potvrđena zaporka nisu jednake")
            return false;
        }

    }

    function checkUserIsValidForRegistration(){
        checkEmailAlreadyExists(email);
        if(username.length<1){
            setErrorUsernameMessage("Korisničko ime mora sadržavati najmanje 1 znak");
            return false;
        }
        if(checkEmailAlreadyExists(email) && checkEmailValid(email) 
            && checkPassword() && checkUsernameAlreadyExists(username)){
                    return true;
            }
            else{
                return false
            }
        }

     
}

