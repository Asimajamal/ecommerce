import React from 'react'
import banner1 from'./pic1.jpg';
import banner2 from'./pic2.jpg';
import banner3 from'./pic3.jpg';

const Banner = () => {
  return (
    <div style={{margin:"50px 20px 5px"}}>
      <div id="carouselExampleDark" className="carousel carousel-dark carousel-fade" data-bs-ride="carousel">
  <div className="carousel-indicators" >
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={banner1} className="d-block w-100" alt="banner"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Welcome To Shopping</h5>
        <p>We are glad to see you here shop you will get on reasonable price.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={banner2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Welcome To Shopping</h5>
        <p>We are glad to see you here shop you will get on reasonable price.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h5>Welcome To Shopping</h5>
        <p>We are glad to see you here shop you will get on reasonable price.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner
