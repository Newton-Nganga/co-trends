import React from 'react'

function Newsletter() {
  return (
    <div className='block w-full bg-transparent p-10 md:p-20'>
           <div className='flex flex-col  bg-purple-400 mx-2 my-3 sm:m-10 p-4 md:px-10 md:py-10 max-w-[900px] md:mx-auto'>
              <h3 className='p-4 w-full quicksand text-4xl text-center text-purple-50'>Subscribe to our weekly Newsletter</h3>
              <p className='p-4 w-full text-center max-w-[500px] mx-auto text-lg text-purple-200'>Get the latest updates on new arrivals & pricing.</p>

             <p className='inline-flex justify-center flex-col sm:flex-row items-center w-full'>
             <input type='email' placeholder='your-email@example.com' name='email' className='p-3 my-3 sm:w-3/6 w-5/6 md:w-4/6 focus:outline-none focus:border-0 text-lg border border-purple-200 text-gray-700 md:rounded-full md:border-0 md:rounded-r-none'/>
             <button href='/subscribe' className='w-5/6 text-lg border border-gray-800 px-5 my-3 block sm:w-auto md:w-1/6 md:inline md:rounded-full bg-gray-900 focus:bg-purple-300 text-purple-50 py-3 md:rounded-l-none'>subscribe</button>
             </p>

           </div>
    </div>
  )
}

export default Newsletter