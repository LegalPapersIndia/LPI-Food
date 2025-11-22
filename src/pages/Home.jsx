import React from 'react'
import HeroBanner from '../components/HeroBanner'
import ServicesAndMenu from '../components/Menu'
import Why from '../components/Why'
import Events from '../components/Events'
import Chefs from '../components/Chefs'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
    <HeroBanner />
    <ServicesAndMenu />
    <Events />
    <Chefs />
    <Gallery />
    <Why />
    <Testimonials />
    </>
  )
}

export default Home