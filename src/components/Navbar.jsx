import React, { useState } from 'react'
import '../App.css'

export default function Navbar() {
    const [navbar,setNavbar]=useState(false);

  return (
   <nav className=' absolute right-0 z-10 w-full px-10 py-6 left-0 bg-purple-400 sm:px-20  '>
        <div className='justify-between mx-auto lg:max-w-7xl md:items-center md:flex '>
            <div>
                <div className='flex items-center justify-between py-3 text-purple-100 md:py-5 md:block'>
                    <a href='/'>
                       <h2 className='text-2xl text-semibold comfortaa'>CoTrends</h2>
                    </a>
                    <div className='md:hidden'>
                      <button className='p-2 rounded-md outline-none focus:border-gray-400 focus:border'
                      onClick={()=>setNavbar(!navbar)}>
                           {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                      </button>
                    </div>
                </div>
            </div>
            <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >  
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 poppins">
                            <li  className="nav-link">
                                <a href="/">Home</a>
                            </li>
                            <li className="nav-link">
                                <a href="/beauty">Beauty</a>
                            </li>
                            <li className="nav-link">
                                <a href="/fashion">Fashion</a>
                            </li>
                            <li className="nav-link">
                                <a href="/products">Products</a>
                            </li>
                            <li className="nav-link">
                                <a href="/trends">Trends</a>
                            </li>
                            <li className="nav-login bg-purple-600">
                                <a href="/trends">Login</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
        </div>
   </nav>
  )
}
