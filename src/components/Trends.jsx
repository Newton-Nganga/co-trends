import React from 'react'
import '../App.css'
import {BsArrowRightShort} from 'react-icons/bs'
import Yu from '../Images/make-up.png'
import hair from '../Images/hair.jpg'
import suits from '../Images/suits.jpg'
import hood from '../Images/hood.jpg'
import hairStyle from '../Images/hair-style.jpg'


function Trends() {
const GallaryPics=[hair,hood,suits,hairStyle,Yu]
  return (
    <div className='block bg-transparent text-gray-700'>
        <div  className='flex flex-col m-4 xs:m-16 bg-pink-50 max-w-[1000px] lg:mx-auto'>
             <div className='p-4 mt-8'>
                <h1 className=' w-full text-5xl font-semibold text-gray-800 text-center p-2 quicksand'>The Trends Gallery</h1>
                <p className='w-full max-w-[600px] text-center p-2 mx-auto'>Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet</p>
             </div>
             <div className='flex flex-col sm:flex-row md:mb-8 flex-wrap'>
                    <div className='flex justify-center text-center w-full sm:w-1/5'>
                       <span className='w-full text-purple-50 h-auto m-auto'><button className='rounded-full bg-purple-600 text-lg p-4 px-4'><BsArrowRightShort/></button></span>
                    </div>
                    <div  className='gallary flex-initial flex flex-row overflow-scroll overscroll-x-auto overflow-x-scroll h-fit w-full overflow-y-hidden  sm:w-3/4 py-1 bg-transparent md:bg-gray-400 my-3  '>
                              {GallaryPics.map((pic,index)=>{
                              return(
                                   <img src={pic} alt='...' className='w-48 h-56 px-1' key={index}/>
                                   )
                           })}     
                    </div>
                    
             </div>
        </div>
    </div>
  )
}

export default Trends