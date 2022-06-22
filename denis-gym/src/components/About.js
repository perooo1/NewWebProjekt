import React from 'react';
import './About.css'
import Trainer from './Trainer';
import {Col,Row} from 'react-bootstrap';


export default function About() {

    const coach1Img = require('../images/coach1.jpg');
    const coach2Img = require('../images/coach2.jpg');
    return (

        <div >
            <h2 className="denisgymTeam">Upoznajte DenisGym tim</h2>
            <Row>
            <Col lg={6} className="trainer">
                <div className="trainer-box">
                    <Trainer
                        img={coach1Img}
                        name="Denis Knežević"
                        descr="Osnivač Denis Gym-a. Bavi se fitnessom preko 10 godina te posjedujepreko 8 godina iskustva u radu s klijenima. Drugi čovjek u FBiH sa Basic ProCoach certifikatom. Posjeduje preko 20 certifikata iz raznih područja vezanih za fitness,poput weightlifting-a, powerlifting-a, nutricionizma i dr."
                    />
                </div>
            </Col>
            <Col lg={6} className="trainer">

                <div className="trainer-box">
                    <Trainer
                        img={coach2Img}
                        name="Lara Santini"
                        descr="Višestruka prvakinja države, Europe i svijeta. Najtrofejnija hrvatska natjecateljica u Bodybuildingu/Fitnessu
                        s višegodišnjim trenerskim iskustvom u radu s klijentima."
                    />
                </div>

            </Col>
            </Row>
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


                   