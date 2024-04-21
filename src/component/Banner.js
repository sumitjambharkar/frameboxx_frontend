import React from 'react'

const Banner = () => {
  return (
    <div>

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://res.cloudinary.com/dub7ltxoo/image/upload/v1713705287/New_Project_41_cwlt30.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/dub7ltxoo/image/upload/v1713705286/New_Project_39_gxssrh.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://res.cloudinary.com/dub7ltxoo/image/upload/v1713705286/New_Project_40_h1rr1c.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Banner