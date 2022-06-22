import React from 'react';
import './Footer.css'
import instagram from '../images/instagram-24.png'
import facebook from '../images/facebook-24.png'
import {Col,Row} from 'react-bootstrap';

export default function Footer() {
    return (
        <footer>
            <Row>
                <Col sm={6}>
                    <div className="contacts">
                        <h3>Kontakti:</h3>
                        <p className="contactEmail">marko.denisgym@gmail.com</p>
                        <p className="contactEmail">santinilara24@gmail.com</p>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="social">
                        <h3>Društvene mreže:</h3>
                        <div className="social-info">
                            <img className="instagram-image" src={instagram} />
                            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiBoa-_4Mb3AhXsl4sKHTGpCHAQFnoECAgQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fteretanadenisgym%2F%3Fhl%3Dhr&usg=AOvVaw09NsBqKQCjCC_M7BQcNxyl">
                                Denis Gym</a>
                        </div>
                        <div className="social-info">
                            <img className="facebook-image" src={facebook} />
                            <a href="https://www.facebook.com/DENISGYMfitnesscentar/">Denis Gym</a>
                        </div>
                        <div className="social-info">
                            <img className="instagram-image" src={instagram} />
                            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiNr-Tw4cb3AhWv-yoKHcKZAXsQFnoECBQQAQ&url=https%3A%2F%2Fwww.instagram.com%2Fdenis.knezevic_%2F%3Fhl%3Den&usg=AOvVaw1DECasdmkl8t623I00Fvbn">
                                Denis Knežević</a>
                        </div>
                        <div className="social-info">
                            <img className="instagram-image" src={instagram} />
                            <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjtwv-75Mb3AhV3AxAIHdyLD-UQFnoECAwQAQ&url=https%3A%2F%2Fwww.instagram.com%2Flara.santini%2F%3Fhl%3Den&usg=AOvVaw3VSniXFbqbM4XbugD5bZ1n">
                                Lara Santini</a>
                        </div>

                    </div>
                 </Col>
                 </Row>

        </footer >
    )
}