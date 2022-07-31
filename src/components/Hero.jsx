import React from 'react'
import '../App.css'
import hero from '../Images/CoTrends-hero.png'
import Navbar from './Navbar'

function Hero() {
  return (
    <div className='bg-purple-400 text-white w-full min-h-[500px]'>
           <Navbar/>
           <div className='flex  flex-col sm:flex-row p-4 pt-[9rem] sm:pt-[9rem] sm:p-10 justify-center'>
                 <div className='flex-initial w-full  sm:w-4/5 md:w-2/4'>
                   <img src={hero} alt='...' className='mx-auto hvr-shutter-in-horizontal'/>
                 </div>
                 <div className='flex-initial w-full p-8 sm:2/4 md:w-2/4 text-center flex justify-center flex-col'>
                 <div className='my-auto'>
                  <h2 className='text-pink-100 text-2xl '>Beauty and Fashion parlour</h2>
                  <h1 className='text-pink-50 text-6xl  comfortaa'>CoTrends</h1>
                  <p className='p-3 text-4xl tangerine'>Your beauty our consand</p>
                 </div> 
                 </div>
           </div>
    </div>
  )
}

export default Hero