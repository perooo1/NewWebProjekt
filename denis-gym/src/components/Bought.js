import React from 'react';
import './Bought.css'
import {useNavigate} from "react-router-dom"

export default function Bought() {

    const navigate = useNavigate();

    const bought = async () =>{

        setTimeout(function(){
            navigate("../");
        },2500);
    };

    bought();
    return (
            

                <div id="tnxMsg">
                    <h1>Uspješno ste kupili paket!</h1>
                    <h2>Hvala na povjerenju</h2>
                </div>

    )

}