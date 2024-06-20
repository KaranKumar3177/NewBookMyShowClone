import React, { useEffect } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MoviePage = () => {

  const {id} = useParams();
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


  return (
    <div>MoviePage</div>
  )
}

export default MovieLayoutHoc(MoviePage)