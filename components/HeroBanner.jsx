import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h1>Titulo</h1>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita exercitationem dignissimos accusamus rerum provident maxime quo inventore facere aspernatur adipisci necessitatibus perspiciatis consectetur sit, officiis assumenda saepe. Accusamus, nam voluptates.</h3>
        <Link href='#'>
          <button>Buy Now!</button>
        </Link>
        <img src="https://freepngimg.com/thumb/apple_iphone/7-2-apple-iphone-png-image.png" alt="" className='hero-banner-image'/>
      </div>
    </div>
  )
}

export default HeroBanner