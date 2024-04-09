import React from 'react'
import Image from 'next/image'
import img from "../../../public/vec.svg"
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  return (
    <div className='w-[100%] h-[100%] bg-[#f8f9fd] flex justify-center pb-[70px] pt-[20px]'>
        <div className='w-[90%] flex items-center justify-between'>
            <div className='w-[38%] h-[400px] rounded-[10px] overflow-hidden'>
                <Image src={img} alt='/' className='h-[100%] w-[100%] object-cover'/>
            </div>
            <div className='w-[55%] p-[30px] bg-[#000] rounded-[10px] flex flex-col'>
                <h4 className='text-[#fff] font-[700]'>OUR SERVICES</h4>
                <h1 className='text-[39px] text-[#fff] font-[700] mt-[40px]'>A-Class Academic Consults Limited</h1>
                <p className='text-[#fff] mt-[40px]'>We a B2B company with a focus on industrial research, marketing research, project impact studies, strategic business consulting and management, personnel training and workshops, brand building and solutions, online advertising and marketing of products. Our core services include:</p>
                <button className='cursor-pointer w-[125px] h-[45px] bg-primary text-white rounded-[10px] text-[14px] font-[600] flex items-center justify-center mt-[40px]'>
                    <label>Learn More</label>
                    <div className='ml-[5px] mt-[2px]'><FaArrowRight /></div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default OurServices