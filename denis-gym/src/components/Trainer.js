import React from 'react';
import './Trainer.css'

export default function Trainer(props) {

    
    return (
        <div>
            <div className="trainer">
                <img
                    className="trainer-pic"
                    src={props.img}
                />
            </div>
            <h3>{props.name}</h3>
            <p className="trainer-text">{props.descr}</p>
        </div>
    )
}


/*Osnivač Denis Gym-a. Bavi se fitnessom preko 10 godina te posjeduje
                preko 8 godina iskustva u radu s klijenima. Drugi čovjek u FBiH sa Basic Pro
                Coach certifikatom. Posjeduje preko 20 certifikata iz raznih područja vezanih za fitness,
                poput weightlifting-a, powerlifting-a, nutricionizma i dr.*/


                /*`D:/Labosi2021/WEB/denis-gym/src/images/${props.img}`*/