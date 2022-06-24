import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import icon from '../images/login-icon.png'
import { auth } from '../firebase-config';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase-config';
import { collection, doc, getDocs, Timestamp } from 'firebase/firestore';

export default function Navbar() {

    const [user, setUser] = useState({});
    const [expDate, setExpDate] = useState();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState();


    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if (currentUser != null) {
            setEmail(currentUser.email);
            getUserData();
        } else {
            setEmail(null);
            setUsername(null);
            setExpDate(null);
        }
    });
    const usersCollectionRef = collection(db, "users");

    const getUserData = async () => {

        getDocs(usersCollectionRef).then((response) => {
            response.docs.map((item) => {
                if (email == item.data().email) {
                    setUsername(item.data().username);
                    setExpDate(new Date(item.data().expDate).toLocaleDateString()); //convert to ms

                } else {
                }
            })
        })
    }

    return (
        <nav className="navbar navbar-expand-lg">
            <div></div>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Denis Gym</a>
                <button className="navbar-toggler navbar-dark" id="toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <div id="dispInfo">
                            <li className='nav-item' id='navUsername'>
                                {email == null ? (<div className='msgToUser' id="noName">Bok
                                    Gost</div>) : (
                                    <div className='msgToUser'>Bok {username}</div>
                                )}
                            </li>
                            <li className='nav-item' id='navExpDate'>
                                {expDate == null ? (<div className='noMsgToUser'>
                                </div>)
                                    : (<div className='msgToUser'> Datum isteka članarine: {expDate}</div>)}
                            </li>
                        </div>
                        <div id='dispPage'>
                            <li className="nav-item" id="navOnama">
                                <a className="nav-link" onClick={() => {
                                    const anchor = document.querySelector('#about')
                                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>O nama</a>
                            </li>
                            <li className="nav-item" id="navTransformacije">
                                <a className="nav-link" onClick={() => {
                                    const anchor = document.querySelector('#transformations')
                                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>Transformacije</a>
                            </li>
                            <li className="nav-item" id="navUsluge">
                                <a className="nav-link" onClick={() => {
                                    const anchor = document.querySelector('#bundles')
                                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                                }}>Usluge</a>
                            </li>
                            <li className="nav-item" id="navLogin">
                                {email == null ? (
                                    <a href="/login" role="button" target="_self"> <img id="login-image" className="nav-link "
                                        src={icon} /></a>
                                ) : (
                                    <a href="/logout" className="nav-link ">Odjavite se</a>
                                )}
                            </li>
                        </div>

                    </ul>
                </div>
            </div>
        </nav>

    )

}