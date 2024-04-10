import Description from '@/src/components/AboutpageSections.tsx/Description'
import Difference from '@/src/components/AboutpageSections.tsx/Difference'
import Hero from '@/src/components/AboutpageSections.tsx/Hero'
import Mission from '@/src/components/AboutpageSections.tsx/Mission'
import Vision from '@/src/components/AboutpageSections.tsx/Vision'
import Testimonials from '@/src/components/HomepageSections/Testimonials'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <Hero />
      <Description />
      <Vision />
      <Mission />
      <Difference />
      <Testimonials />
    </div>
  )
}

export default AboutPage