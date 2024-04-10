import React from 'react'
import Hero from '@/src/components/ServicespageSection/Hero'
import Banner from '@/src/components/ServicespageSection/Banner'
import CoreServices from '@/src/components/ServicespageSection/CoreServices'
import Clients from '@/src/components/ServicespageSection/Clients'
import HowWeWork from '@/src/components/ServicespageSection/HowWeWork'

const ServicePage = () => {
  return (
    <div>
      <Hero />
      <Banner />
      <CoreServices />
      <Clients />
      <HowWeWork />
    </div>
  )
}

export default ServicePage