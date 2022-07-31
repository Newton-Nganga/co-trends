import React from 'react'
import '../App.css'
import BeautySector from '../components/BeautySector'
import CosmeticProducts from '../components/CosmeticProducts'
import FashionCollections from '../components/FashionCollections'
import FashionSection from '../components/FashionSection'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ModernItems from '../components/ModernItems'
import Newsletter from '../components/Newsletter'
import Stylist from '../components/Stylist'
import Trends from '../components/Trends'
import Trusted from '../components/Trusted'



function Home() {
  return (
    <div className='bg-area montserrat'>
        <Hero/>
        <Trends/>
        <ModernItems/>
        <Stylist/>
        <BeautySector/>
        <CosmeticProducts/>
        <FashionSection/>
        <FashionCollections/>
        <Trusted/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home