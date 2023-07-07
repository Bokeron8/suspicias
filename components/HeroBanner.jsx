import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div className='banner-container'>
        <div>
          <h1>Rubik's 3x3</h1>
          <p>The Rubik’s Cube is a classic colour-matching puzzle that can be enjoyed at home or on the move. The original, classic 3x3 cube is a highly addictive brain teaser that has fascinated fans all around the world for decades</p>
          <Link href='#'>
            <button>Buy Now!</button>
          </Link>
        </div>
        <div className='hero-banner-image-container'>
          <img src="https://parainfernalia.com.ar/wp-content/uploads/2022/11/STAMPS-PICADOR-CUBO-RUBIK-4-PARTES-PI-DELIVERY.png" alt="" className='hero-banner-image'/>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner