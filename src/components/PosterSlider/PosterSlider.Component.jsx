import React from 'react'
import Slider from 'react-slick'
import Poster from '../../Poster/Poster.Component'

const PosterSlider = (props) => {
  const {posters, title, subtitle, isDark, config} = props;

  const settings = {
        infinite : false,
        autoplay : false,
        slidesToShow : 5,
        slidesToScroll: 4,
        initialSlide : 0,
  };

  return (
   <>
   <div className='flex flex-col items-start sm:ml-3 my-2'>
    <h3 className={`text-2xl font-bold'  ${isDark? 'text-white' : 'text-gray-800'}`}> {title} </h3>
    <p className={`text-sm' ${isDark ? 'text-white' : 'text-gray-800' }`}> {subtitle} </p>
   </div>

   <Slider {...settings}>
    {posters.map((each, index)=>
    <Poster {...each} isDark={isDark} key={index} />
    )}
   </Slider>

   </>
  )
}

export default PosterSlider