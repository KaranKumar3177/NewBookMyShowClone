import React from 'react'
import {Slider} from "react-slick";

const EntertainmentCard = (props) =>{
    return (
        <>
        <div className='w-full h-30 px-2'>
            <img src={props.src} alt='entertainment' className='w-full h-full rounded-lg' />
             </div>
        </>
    )
}

const EntertainmentCardSlider = () => {
    const EntertainmentImage = [];

    const settings = {};

  return (
   <>
   <Slider {...settings}>
    {EntertainmentImage.map((image)=> (
        <EntertainmentCard src={image} />
    ))}
    </Slider> 
   </>
  )
}

export default EntertainmentCardSlider