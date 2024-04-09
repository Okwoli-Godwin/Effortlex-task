import React from 'react'
import Image from 'next/image'
import img from "../../../public/shake.svg"
import { FaArrowRight } from "react-icons/fa";

const Academic = () => {
  return (
    <div className='w-[100%] flex justify-center pt-[20px] pb-[60px] bg-[#f8f9fd]'>
        <div style={{
            background: "linear-gradient(180deg, #081A5B 0%, rgba(0, 0, 0, 0.91) 104.94%)"
        }} className='w-[90%] flex p-[30px] pr-[45px] rounded-[10px] justify-between'>
            <div className='h-[350px] w-[38%]'>
                  <Image src={img} alt='/' className='w-[100%] h-[100%] object-cover' />
            </div>
            <div className='w-[50%] flex flex-col'>
                <p className='text-white'>A-Class Academic Consults Limited is an organization that supports clients in making strategic decisions by providing in-depth research and practical insights. They offer excellent marketing strategies, help with staff recruitment, and provide training for personnel development. With the goal of offering long-term solutions to problems with technology integration, the company highlights the significance of technology, especially artificial intelligence (AI), in business operations.</p>
                
                <button className='cursor-pointer w-[125px] h-[45px] bg-primary text-white rounded-[10px] text-[14px] font-[600] flex items-center justify-center mt-[100px]'>
                    <label>Learn More</label>
                    <div className='ml-[5px] mt-[2px]'><FaArrowRight /></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Academic