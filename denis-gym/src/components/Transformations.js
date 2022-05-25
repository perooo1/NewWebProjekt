import React from 'react';
import 'D:/Labosi2021/WEB/denis-gym/src/components/Transformations.css'
import transformation1 from 'D:/Labosi2021/WEB/denis-gym/src/images/transformation1.jpg'
import transformation2 from 'D:/Labosi2021/WEB/denis-gym/src/images/transformation2.jpg'
import transformation3 from 'D:/Labosi2021/WEB/denis-gym/src/images/transformation3.jpg'


export default function Transformations() {

  return (
    <div className="row transformations" id="transformations">
      <h2 id="titleTransformations">Transformacije naših klijenata</h2>
      <div id="carouselClients" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={transformation1} className="d-block w-100 client" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Toni Tonik</h5>
              <p>Nakon 3 mjeseca osobnog treniranja</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={transformation2} className="d-block w-100 client" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Petar Petrović</h5>
              <p>Nakon 2 godine Full paketa</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={transformation3} className="d-block w-100 client" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>David Davidović</h5>
              <p>Nakon 5 godina Full paketa</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );

}