import React from 'react';
import './Transformations.css'
import transformation1 from '../images/transformation1.jpg'
import transformation2 from '../images/transformation2.jpg'
import transformation3 from '../images/transformation3.jpg'
import Carousel from 'react-bootstrap/Carousel'


export default function Transformations() {

  return (
    <div>
    <h2 className='titleTransformations'>Transformacije naših klijenata</h2>
     
     <Carousel className='carouselClients'>
      <Carousel.Item >
      <img src={transformation1} className="d-block w-100 client" alt="..." />
            <Carousel.Caption>
              <h5>Antonio Džoić</h5>
              <p>Nakon 3 mjeseca osobnog treniranja</p>
            </Carousel.Caption>
        
        </Carousel.Item>
        <Carousel.Item>
            <img src={transformation2} className="d-block w-100 client" alt="..." />
            <Carousel.Caption>
              <h5>Petar Petrović</h5>
              <p>Nakon 2 godine Full paketa</p>
            </Carousel.Caption>
            
        
          </Carousel.Item>
          <Carousel.Item>
            <img src={transformation3} className="d-block w-100 client" alt="..." />
            <Carousel.Caption>
              <h5>David Marić</h5>
              <p>Nakon 2 godine Full paketa</p>
            </Carousel.Caption>
            </Carousel.Item>

      </Carousel>
    </div>
  );

}