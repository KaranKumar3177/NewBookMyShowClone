import React, { useContext, useEffect } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import {FaCcVisa, FaCcApplePay} from "react-icons/fa"
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';

const MoviePage = () => {

  const {id} = useParams();

  const {movie, setMovie} = useContext(MovieContext)
  const [cast, setCast] = useState();
  const [similarMovies, setSimilarMovies] = useState();
  const [recommendedMovies, setRecommendedMovies] = useState();
  useEffect(()=> {
    const requestCast = async() => {
      const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=01fc8fcea82a3bca9444250d3d3b3c5d`);
      setCast(getCast.data.cast)
    }
    requestCast();
  }, [id])

  useEffect(()=> {
    const requestSimilarMovies = async() => {
      const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=01fc8fcea82a3bca9444250d3d3b3c5d`);
      setSimilarMovies(getSimilarMovies.data.results)
    }
    requestSimilarMovies();
  }, [id])

  useEffect(()=> {
    const requestRecommendedMovies = async() => {
      const getRecommendedMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=01fc8fcea82a3bca9444250d3d3b3c5d`);
      setRecommendedMovies(getRecommendedMovies.data.cast)
    }
    requestRecommendedMovies();
  }, [id])

  const settingsCast = {
    infinite : false,
    autoplay : false,
    slidesToShow : 5,
    slidesToScroll: 4,
    initialSlide : 0,
  };

  const settings = {
    infinite : false,
    autoplay : false,
    slidesToShow : 5,
    slidesToScroll: 4,
    initialSlide : 0,
  };


  return (
    <>
    {/* <MovieHero/> */}

  <div className='my-12 container px-4 lg:w-2/1'>
  <div className='flex flex-col items-start gap-3'>
    <h1 className='text-gray-800 font-bold gap-3'>About the Movie</h1>
    <p>{movie.overview}</p>
  </div>

  <div className='my-8'>
    <hr />
  </div>

  <div className='my-8'>
    <h2 className='text-gray-800 font-bold text-2xl mb-3'>Applicable Offers</h2>

    <div className='flex flex-col gap-3 lg:flex-row'>
      <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
        <div className='w-8 h-8'>
          <FaCcVisa className='w-full h-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
          <p className='text-gray-600'>Get 50% off upto Rs. 150 on all RuPay cards* on BookMyShow Stream.</p>
        </div>
      </div>

      <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
        <div className='w-8 h-8'>
          <FaCcApplePay className='w-full h-full' />
        </div>
        <div className='flex flex-col items-start'>
          <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
          <p className='text-gray-600'>Get 50% off upto Rs. 150 on all RuPay cards* on BookMyShow Stream.</p>
        </div>
      </div>

  </div>

</div>


<div className='my-8'>
    <hr />
  </div>

  <div className='my-8'>
    <h1>Cast & Crew</h1>
  </div>

  <div className='my-8'>
    <hr />
  </div>

  <div className='my-8'>
  <h1>Recommended Movies</h1>
  <PosterSlider config={settings}
  title= "Recommended Movies"
  posters={recommendedMovies}
  isDark={false}
  />
  </div>

  <div className='my-8'>
    <hr />
  </div>

  <div className='my-8'>
  <h1>BMS XCLUSIVE</h1>
  </div>

  <div className='my-8'>
    <hr />
  </div>

</div>
</>
  )
}

export default MovieLayoutHoc(MoviePage)