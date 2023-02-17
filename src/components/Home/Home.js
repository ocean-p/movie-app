import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies(movies))
    dispatch(fetchAsyncShows(shows))
  }, [dispatch])

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing/>
    </div>
  )
}

const movies = 'Demon Slayer';
const shows = 'Conan';

export default Home