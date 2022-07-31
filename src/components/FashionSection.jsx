import React from 'react'
import Fashion from '../Images/fashion-section.png'



function FashionSection() {
  return (
    <div className='block w-full bg-purple-400 my-10 py-10 px-5 xs:p-10 sm:p-20'>
    <div className=''>
                <div className='w-full grid grid-cols-1 sm:grid-cols2 md:grid-cols-5 h-auto'>
                    <div className='col-span-1 p-4 text-lg text-purple-100 text-left my-2 lg:mr-3 md:col-span-2'>
                        <h3 className='text-4xl sm:text-5xl text-purple-50 my-2 quicksand'>Our Fashion collections</h3>
                        <p className='text-base text-left py-3'>
                        Grab the opportunity for new arrivals, with classy outfits for men, women, office-ladies'.We also offer school uniforms sports outfit among may more.Check out our stock.
                        </p>
                        <button className='quicksand hover:bg-purple-600 hover:text-purple-50  w-full rounded-full text-gray-600 text-base my-3 bg-purple-100 py-3 xs:w-auto xs:px-6 xs:py-3'>view more</button>
                    </div>
                    <div className='col-span-1 md:col-span-3 p-2 max-h-[400px] h-auto'>
                         <img src={Fashion} alt='beauty sector' className='w-full max-w-[600px]  h-full'/>
              </div>
      </div> 
    </div>
   
  </div>
  )
}

export default FashionSection