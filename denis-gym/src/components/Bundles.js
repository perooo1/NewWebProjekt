import React from 'react';
import './Bundles.css'
import {Col,Row} from 'react-bootstrap';

export default function Bundles(){
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
              <a href="#">Kupi paket</a>
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
              <a href="#">Kupi paket</a>
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
              <a href="#">Kupi paket</a>
            </div>
          </div>

        </Col>
        </Row>
        </div>
    )
}