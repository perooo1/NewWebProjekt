import React from 'react';
import ReactDOM from 'react-dom/client';
import 'D:/Labosi2021/WEB/denis-gym/src/components/Navbar.css'
import icon from 'D:/Labosi2021/WEB/denis-gym/src/images/login-icon.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Denis Gym</a>
                <button className="navbar-toggler navbar-dark" id="toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item" id="navOnama">
                            <a className="nav-link" href="#trainers">O nama</a>
                        </li>
                        <li className="nav-item" id="navTransformacije">
                            <a className="nav-link" href="#transformations">Transformacije</a>
                        </li>
                        <li className="nav-item" id="navUsluge">
                            <a className="nav-link" href="#usluge">Usluge</a>
                        </li>
                        <li className="nav-item" id="navLogin">
                            <a href="/register" role="button" target="_self"> <img id="login-image" className="nav-link "
                                src={icon} /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}