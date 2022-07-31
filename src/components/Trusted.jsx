import React from 'react'
import {SiAdidas, SiBata, SiLoom, SiNike, SiOrg, SiPaypal} from 'react-icons/si'

const Brands =[
    {brand:<SiAdidas style={{display:'inline',color:'inherit'}}/>},
    {brand:<SiPaypal style={{display:'inline',color:'inherit'}}/>},
    {brand:<SiBata style={{display:'inline',color:'inherit'}}/>},
    {brand:<SiLoom style={{display:'inline',color:'inherit'}}/>},
    {brand:<SiNike style={{display:'inline',color:'inherit'}}/>},
    {brand:<SiOrg style={{display:'inline',color:'inherit'}}/>},
]

function Trusted() {
  return (
    <div className='block w-full bg-brands px-10 mt-5'>
        <div className='brands flex flex-row flex-nowrap justify-around text-gray-700 overflow-scroll overscroll-x-auto  overflow-y-hidden overflow-x-scroll'>
           {Brands.map((brand,index)=>{
            return(
                <span className='px-5 mx-3 text-[4rem] ' key={index}>{brand.brand}</span>
            )
           })}  
        </div>
        <h2 className='w-full text-center text-gray-700 p-4  quicksand text-xl'>Our Trusted Partners</h2>
    </div>
  )
}

export default Trusted