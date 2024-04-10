import React from 'react'
import Image from 'next/image'
import img from "../../../public/about.svg"

const Hero = () => {
    const backgroundImageStyle = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover', // optional: adjust background size
        backgroundPosition: 'center', // optional: adjust background position
        // You can add more background properties here as needed
    };
  return (
    <div  className='w-[100%] pt-[80px] pb-[20px] min-h-[80vh]' style={backgroundImageStyle}>
          
    </div>
  )
}

export default Hero