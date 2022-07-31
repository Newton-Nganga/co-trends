import React from 'react'
import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai'
import {FaAppStore, FaGooglePlay} from 'react-icons/fa'

function Footer() {
    const year=new Date().getFullYear()
  return (
    <div className='block w-full bg-gray-800 text-left'>
          <div className='w-full p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
             <div className='col-span-1 flex flex-col justify-center  my-3'>
                <button className='bg-purple-50 p-3 my-4  w-44 text-left rounded-md text-xl'><FaGooglePlay style={{display:'inline',color:'inherit'}}/> Google play</button>
                <button className='bg-purple-50 p-3 my-4  w-44 text-left rounded-md text-xl'><FaAppStore style={{display:'inline',color:'inherit'}}/> App store</button>
             </div>
             <div className='col-span-1 flex flex-col text-purple-100  my-3'>
                <h3 className='w-full quicksand text-3xl'>Useful links</h3>
                <ul>
                     <li className='footer-link'>products</li>
                     <li className='footer-link'>cosmetics</li>
                     <li className='footer-link'>beauty</li>
                     <li className='footer-link'>men</li>
                     <li className='footer-link'>women</li>
                     <li className='footer-link'>children</li>
                </ul>
             </div>
             <div className='col-span-1 flex flex-col text-purple-100 my-3'>
                <h3 className='w-full quicksand text-3xl'>About us</h3>
                <ul>
                     <li className='footer-link'>about</li>
                     <li className='footer-link'>our team</li>
                     <li className='footer-link'>our blog</li>
                     <li className='footer-link'>affiliate</li>
                     <li className='footer-link'>other link </li>
                </ul>
             </div>
             <div className='col-span-1 flex flex-col text-purple-100 my-3'>
                <h3 className='w-full quicksand text-3xl'>Contact us</h3>
                <ul>
                     <li className='footer-link'>Our contacts</li>
                     <li className='footer-link'>Location</li>
                     <li className='footer-link'>Open?</li>
                </ul>
             </div>
          </div>
          <div className='w-full p-10 py-5 my-4 border border-x-0 border-purple-100 flex flex-col  sm:flex-row text-purple-50'>
                <p className='text-3xl  p-3 text-purple-200'>
                    <h3 className='text-3xl comfortaa p-3 text-purple-200'>CoTrends</h3>
                    <span className='tangerine'>Your beauty our consand</span>
                </p>
                <p className=''>
                    <span className='p-3 text-3xl m-3'><AiOutlineTwitter style={{display:'inline',color:'inherit'}}/></span>
                      <span className='p-3 text-3xl m-3'><AiOutlineInstagram style={{display:'inline',color:'inherit'}}/></span>
                     <span className='p-3 text-3xl m-3'><AiOutlineFacebook style={{display:'inline',color:'inherit'}}/></span>
                     <span className='p-3 text-3xl m-3'><AiOutlineYoutube style={{display:'inline',color:'inherit'}}/></span>
                </p>
                
          </div>
          <div className='w-full flex flex-col xs:flex-row text-purple-50 py-4 px-10 text-lg justify-between'>
              <p>Copyright {year}</p>
              <p>Privacy policy</p>
              <p>Newton</p>
          </div>
    </div>
  )
}

export default Footer