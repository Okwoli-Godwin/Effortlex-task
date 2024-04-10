import React from 'react'
import Image from 'next/image'
import img from "@/public/clients.png"

const Clients = () => {
  return (
    <div className='w-[100%] flex justify-center bg-[#f8f9fd] pb-[40px] pt-[35px]'>
        <div className='w-[90%] flex flex-col'>
            <h1 className='text-[#434141] text-[26px] font-[700]'>OUR CLIENTS</h1>
            
            <div className='flex items-center justify-between'>
                <div className='w-[55%]'>
                    <p className='text-[#434141]'>For over four years, organisations in the private and public sectors across Nigeria have relied heavily on A-Class Academic Consults Limited research services, business consulting and personnel/human development training to boost their performance index. Our Clients cut across several industries such as engineering firms, oil and gas companies, real estate, construction companies, health and social care organisations, retail, research agencies, government and non-governmental organisations etc</p>
                </div>
                <div className='w-[38%] h-[430px]'>
                    <Image src={img} alt='clients' className='w-full h-[100%] object-cover' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Clients