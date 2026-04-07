import CtaSectionPage from '@/components/CtaSectionPage'
import FaqSectionPage from '@/components/FaqSectionPage'
import HeroSectionPage from '@/components/HeroSectionPage'
import NewsSectionPage from '@/components/NewsSectionPage'
import TestimonialSectionPage from '@/components/TestimonialSectionPage'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <HeroSectionPage/>
      <TestimonialSectionPage/>
      <NewsSectionPage/>
      <FaqSectionPage/>
      <CtaSectionPage/>
    </div>
  )
}

export default HomePage