import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import LatestProducts from '../components/LatestProducts'
import About from '../components/About'
import Footer from '../components/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'


function Home() {
  const [movies, setMovies] = useState([])

  const API_KEY = 'api_key=119059e28ee558cb8f8e6aff473a822c'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL =  `${BASE_URL}/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.asc&${API_KEY}`

  useEffect(() => {
    axios.get(API_URL)
    .then(resp => setMovies(resp.data.results.splice(0, 4)))
    .catch(e => console.log(e))
  }, [])
  

  return (
    <>
      <Header />
      <Slider />
      <LatestProducts movies={movies}/>
      <About />
      <Footer />
    </>
  )
}

export default Home
