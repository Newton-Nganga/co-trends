import React,{useState} from 'react'
import {MdNavigateNext,MdNavigateBefore} from 'react-icons/md'
import stylist1 from '../Images/stylist-1.jpg'
import stylist2 from '../Images/stylist-2.jpg'
import stylist3 from '../Images/stylist-3.jpg'
import stylist4 from '../Images/stylist-4.jpg'
import stylist5 from '../Images/stylist-5.jpeg'




const CarouselData=[{image:stylist1},{image:stylist2},{image:stylist3},{image:stylist4},{image:stylist5}]
function Stylist() {

  const [state,setState]=useState({currentSlide:0,paused:false});
  const nextSlide = () => {
    let newSlide =
      state.currentSlide === CarouselData.length - 1
        ? 0
        :state.currentSlide + 1;
    setState({ currentSlide: newSlide });
  };

  const prevSlide = () => {
    let newSlide =
      state.currentSlide === 0
        ? CarouselData.length - 1
        : state.currentSlide - 1;
    setState({ currentSlide: newSlide });
  };

  // const setCurrentSlide = (index) => {
  //   setState({ currentSlide: index });
  // };
  return (
    <div className='w-full block'>
         <div className='block m-6 xs:m-16 bg-pink-50 max-w-[1000px] lg:mx-auto  h-[400px]'>
         {/* <Swipe onSwipeLeft={nextSlide} onSwipeRight={prevSlide}> */}
            {CarouselData.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className= {
                    index === state.currentSlide
                      ? "block w-full h-full object-cover lg:absolute lg:h-[400px] lg:max-w-[1000px]"
                      : "hidden"
                  }
                />
              );
            })}
          {/* </Swipe> */}
            {/* <img src={stylist} alt='...' className='w-full h-full'/> */}
            <div className='bg-purple-50 py-2 md:p-10 md:stylist-md  lg:stylist-lg  relative top-[-150px]  text-left'>
              <h3 className='text-3xl text-gray-700 font-semibold p-3 quicksand'>Our Stylists</h3>
              <p className='text-base text-gray-500 p-3'>Something about our stylist professionals goes here.They are well educated and skilled in outfits</p>
              <p className='absolute bottom-[380px] sm:arrow-left-sm md:arrow-left-md lg:arrow-left-lg'><span role='button' onClick={nextSlide} className='text-purple-50 bg-purple-600 text-4xl p-2 '><MdNavigateNext style={{display:"inline"}}/></span></p>
              <span className='text-purple-50 bottom-[280px] bg-purple-600 text-4xl p-2  relative sm:arrow-right-sm md:arrow-right-md lg:arrow-right-lg' role='button' onClick={prevSlide}><MdNavigateBefore stroke='white' fill='white' style={{display:"inline"}}/></span>
            </div>
            
         </div>
    </div>
  )
}

export default Stylist