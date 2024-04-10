import React from 'react'
import Image from 'next/image'
import img from "@/public/mission.png"

const Mission = () => {
    return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd]'>
        <section className='p-16 pt-[40px] h-full max-lg:p-12 max-md:p-8 max-lg:mx-5 rounded-xl bg-white w-[95%] flex items-center pb-[35px] justify-between mb-[35px]'>
            <div className='w-[370px] h-[390px]'>
                  <Image src={img} alt='/' className='rounded-se-3xl rounded-bl-3xl object-cover w-full h-full'/>
            </div>
            
            <div className='w-[50%] flex flex-col'>
                <h2 className='text-primary text-[30px] font-[700]'>MISSION</h2>
                <p className='mt-[20px]'>
                    Our mission is to innovate sustainable solutions and nurture the competencies of our client organisations in the private and public sectors to improve their business operations and achieve business success. 
                </p>
            </div>
        </section>
    </div>
  )
}

export default Mission