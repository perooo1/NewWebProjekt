import React from 'react';
import './Bundles.css'
import {Col,Row} from 'react-bootstrap';
import { auth } from '../firebase-config';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { db } from '../firebase-config';
import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


export default function Bundles(){

  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [expDate, setExpDate] = useState(new Date());
  

  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) =>{
    setUser(currentUser);
    if(currentUser!=null){
    setEmail(currentUser.email);
    getExpDate();
    } else{
        setEmail(null);
        setExpDate(null);
    }
  });
  const usersCollectionRef = collection(db,"users");


  const getExpDate = async() => {

    getDocs(usersCollectionRef).then((response) =>{
        response.docs.map((item) =>{
            if(email ==item.data().email){
                setExpDate(new Date(item.data().expDate));

            }else{
            }
        })
})
  }
  const updateExpDate = async(months) => {
    
    const docRef=doc(db,"users", user.uid);

    const docSnap = await getDoc(docRef);
      setExpDate(new Date(docSnap.data().expDate));
      const newExpDate = expDate;
      newExpDate.setMonth(expDate.getMonth()+ months);
      await updateDoc(docRef,{
        expDate: newExpDate.toISOString()
      });  
        

      setTimeout(function(){
        navigate("../bought");
    },1000);
      
      }

     
  
  

    return(
<div>
        <h1 className="headerPricing">Odaberite naše usluge</h1>
        <Row>
        <Col lg={4} className="pricing-box box1">

          <div className="plan-inner">
            <div className="entry-title">
              <h3>Osnovni paket</h3>
              <div className="price">25€ <span>mjesečno</span>
              </div>
            </div>
            <div className="entry-content">
              <ul>
                <li><strong>1x</strong> trening dnevno</li>
                <li><strong>7x</strong> treninga tjedno</li>
                <li> <strong>Bez</strong> vodstva trenera</li>
                <li><strong>3 sata</strong> maksimalno trajanje treninga</li>
              </ul>
            </div>
            <div className="btn">
              <a className="buyBtn" onClick={() => updateExpDate(1)}>Kupi paket</a>
            </div>
          </div>
        </Col>
      <Col lg={4} className=" pricing-box box2">

          <div className="plan-inner">
            <div className="entry-title">
              <h3>Napredni paket</h3>
              <div className="price">50€<span>mjesečno</span>
              </div>
            </div>
            <div className="entry-content">
              <ul>
                <li><strong>3x</strong> treninga tjedno</li>
                <li><strong>Plan</strong> treninga</li>
                <li><strong>Vodstvo</strong> osobnog trenera</li>
                <li><strong>Plan</strong> prehrane</li>
              </ul>
            </div>
            <div className="btn">
              <a  className="buyBtn" onClick={() => updateExpDate(1)}>Kupi paket</a>
            </div>
          </div>

        </Col>
        <Col lg={4} className="pricing-box box3">
          <div className="plan-inner">
            <div className="entry-title">
              <h3>Full paket</h3>
              <div className="price">75€<span>mjesečno</span>
              </div>
            </div>
            <div className="entry-content">
              <ul>
                <li><strong>5x</strong> treninga tjedno</li>
                <li><strong>Plan</strong> treninga</li>
                <li><strong>Vodstvo</strong> osobnog trenera</li>
                <li><strong>Plan</strong> prehrane</li>
                <li><strong>3x</strong> kickbox treniga s trenerom</li>
              </ul>
            </div>
            <div className="btn">
              <a  className="buyBtn" onClick={() => updateExpDate(1)}>Kupi paket</a>
            </div>
          </div>

        </Col>
        </Row>
        </div>
    )
}