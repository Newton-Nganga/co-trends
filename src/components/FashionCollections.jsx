import React from 'react'
import { BsCart3 } from 'react-icons/bs';

import shoe from '../Images/lady-shoes.jpg'
import dress from '../Images/dress.jpg'
import cap from '../Images/cap.jpg'
import shirt from '../Images/shirt.jpg'
import hood from '../Images/hood.jpg'
import suits from '../Images/suits.jpg'
import { AiOutlineTags } from 'react-icons/ai';
const Stock=[
    {
        image:shirt,
        cost:400
    },
    {
        image:hood,
        cost:40
    },
    {
        image:dress,
        cost:30
    },
    {
        image:suits,
        cost:280
    },
    {
        image:shoe,
        cost:350
    },
    {
        image:cap,
        cost:20
    }
]
function FashionCollections() {
  return (
    <div className='block w-full p-6 sm:p-10 bg-transparent'>
    <div className='bg-purple-50 mx-4 lg:m-auto max-w-[900px] p-4 rounded-lg'>
           <h3 className='quicksand text-gray-700 text-4xl p-4 text-center'>Fashion collections <AiOutlineTags style={{display:'inline',color:'inherit'}}/></h3>
           <ScrollItems/>
          <p className='w-full p-4 text-center'>
             <a href='/products/beauty'  className='hover:underline hover:text-red-600'>view more</a>
          </p>
    </div>
</div>
  )
}


const ScrollItems=()=>{
    return(
        <div  className='gallary flex-initial flex flex-nowrap flex-row overflow-scroll overscroll-x-auto  overflow-x-scroll h-fit w-full overflow-y-hidden  py-1 bg-transparent my-3 shadow '>
                {Stock.map((pic,index)=>{
                  return(
                        <div className='relative inline-flex flex-col items-stretch w-48 h-56 px-1 mx-3 bg-transparent rounded shadow-md' style={{backgroundImage:`url(${pic.image})` ,backgroundSize:'cover'}} key={index}>
                             <p className='inline-block text-left pl-3 w-48 text-lg font-bold  text-red-600'>${pic.cost}</p>
                             <button className='hover:bg-purple-50 hover:animate-bounce hover:text-gray-800 mt-auto mb-2 text-purple-50 bg-purple-600 w-auto rounded-full px-4 py-3 shadow'>Buy Now <BsCart3 style={{display:'inline',color:'inherit'}}/></button>
                        </div>
                   
                    )
                })}  
        </div>
 
        
    )
}



export default FashionCollections