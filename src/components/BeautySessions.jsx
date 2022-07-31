import React from 'react'
import {AiOutlineGold} from 'react-icons/ai'


function BeautySessions() {
  return (
    <div className='block w-full bg-purple-50 h-auto lg:max-h-[300px] relative my-10'>
        <div className='flex flex-row flex-wrap justify-around absolute my-10'>
             <div className='bg-purple-50 rounded-lg text-center p-3 shadow'>
                <p className='w-full'><span className='p-4 rounded-full text-2xl text-gray-600 border border-gray-600 my-3'><AiOutlineGold style={{display:'inline'}}/></span></p>
                <p className='text-orange-400 text-2xl'>Gold</p>
                <p className='text-purple-50'>Get all services at your request</p>
                <p className='text-gray-600 text-2xl'>From $350</p>
                <button className='px-5 py-3 rounded'>Book session</button>
             </div>
        </div>
    </div>
  )
}

export default BeautySessions