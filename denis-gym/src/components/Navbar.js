import React from 'react';
import ReactDOM from 'react-dom/client';
import './Navbar.css'
import icon from '../images/login-icon.png'
import { auth } from '../firebase-config';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

export default function Navbar() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) =>{
      setUser(currentUser);
    });

    
    console.log(user);

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
                    <ul className="navbar-nav ms-auto">
                        <li className='nav-item' id='navUsername'>
                            <p>Bok {user?user.email: "Gost"} </p>
                        </li>
                        <li className='nav-item' id='navExpDate'>
                            <p>Datum isteka članarine: {user?.ExpDate}</p>
                        </li>

                        <li className="nav-item" id="navOnama">
                            <a className="nav-link" href="/#about">O nama</a>
                        </li>
                        <li className="nav-item" id="navTransformacije">
                            <a className="nav-link" href="/#transformations">Transformacije</a>
                        </li>
                        <li className="nav-item" id="navUsluge">
                            <a className="nav-link" href="/#bundles">Usluge</a>
                        </li>
                        <li className="nav-item" id="navLogin">
                            <a href="/login" role="button" target="_self"> <img id="login-image" className="nav-link "
                                src={icon} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}