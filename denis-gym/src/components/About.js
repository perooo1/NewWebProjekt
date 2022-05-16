import React from 'react';
import 'D:/Labosi2021/WEB/denis-gym/src/components/About.css'
import Trainer from './Trainer';


export default function About() {

    const coach1Img = require('D:/Labosi2021/WEB/denis-gym/src/images/coach1.jpg');
    const coach2Img = require('D:/Labosi2021/WEB/denis-gym/src/images/coach2.jpg');
    return (

       


        <div id="trainers">
            <h2 id="denisgymTeam">Upoznajte DenisGym tim</h2>

            <div className="col-sm-6" id="trainer">
                <div className="trainer-box">
                    <Trainer
                        img={coach1Img}
                        name="Denis Knežević"
                        descr="Osnivač Denis Gym-a. Bavi se fitnessom preko 10 godina te posjedujepreko 8 godina iskustva u radu s klijenima. Drugi čovjek u FBiH sa Basic ProCoach certifikatom. Posjeduje preko 20 certifikata iz raznih područja vezanih za fitness,poput weightlifting-a, powerlifting-a, nutricionizma i dr."
                    />
                    <Trainer
                        img={coach2Img}
                        name="Lara Santini"
                        descr="Višestruka prvakinja države, Europe i svijeta. Najtrofejnija hrvatska natjecateljica u Bodybuildingu/Fitnessu
                        s višegodišnjim trenerskim iskustvom u radu s klijentima."
                    />
                </div>
            </div>
        </div>
    )

}



/*<div className="trainer">
                        <img className="trainer-pic" src="images\coach1.jpg" />
                    </div>
                    <h3>Denis Knežević</h3>
                    <p className="trainer-text">Osnivač Denis Gym-a. Bavi se fitnessom preko 10 godina te posjeduje
                        preko 8 godina iskustva u radu s klijenima. Drugi čovjek u FBiH sa Basic Pro
                        Coach certifikatom. Posjeduje preko 20 certifikata iz raznih područja vezanih za fitness,
                        poput weightlifting-a, powerlifting-a, nutricionizma i dr.
                    </p>*/


                   