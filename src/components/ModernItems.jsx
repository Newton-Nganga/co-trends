import React from 'react'
import {IoShirtOutline} from  'react-icons/io5'
import {GiArmoredPants, GiBasketballJersey, GiMailShirt, GiRunningShoe, GiSkirt} from 'react-icons/gi'
function ModernItems() {
  return (
    <div className='block w-full'>
         <div className='flex flex-col sm:flex-row bg-purple-400 m-4 sm:m-16 p-6 sm:p-10 max-w-[900px] md:mx-auto'>
               <div className='flex-initial sm:w-1/2 p-6'>
                <h2 className='w-full text-left pb-4 text-purple-50 text-5xl quicksand'>Modern Items</h2>
                <p className='w-full text-left text-purple-200'>Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet Lorem ipsum doet lorem ipsum doet</p>
               </div>
               <div className='flex-initial grid grid-cols-2 sm:grid-cols-3 gap-4 sm:w-1/2 xs:p-6 p-4'>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><IoShirtOutline style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>shirts</p></span>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><GiMailShirt style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>pullovers</p></span>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><GiArmoredPants style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>pants</p></span>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><GiRunningShoe style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>shoes</p></span>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><GiSkirt style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>skirts</p></span>
                   <span className='bg-transparent p-3 text-center'><p className='modern-items-icon'><GiBasketballJersey style={{display:'inline',color:'inherit'}}/></p><p className='text-gray-700 text-sm'>jerseys</p></span>
               </div>
         </div>
    </div>
  )
}

export default ModernItems