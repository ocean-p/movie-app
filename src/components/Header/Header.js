import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
  const [term, setTerm] = useState('')
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    if(term.trim().length === 0) return alert('Please enter title')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
  }

  return (
    <div className='header'>
      <Link to='/'>
        <div className="logo">Movie App</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submit}>
          <input type="text" value={term}
            placeholder='Search Movies or Series' 
            onChange={(e) => setTerm(e.target.value)}/>
          <button type='submit'>
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header