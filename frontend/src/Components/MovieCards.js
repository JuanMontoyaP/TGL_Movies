import React, {useEffect} from 'react'
import {Container} from 'react-bootstrap'
import EachCard from './EachCard'
import {useMovieContext} from '../context/MoviesContext'

//Children of Home on Views
function MovieCards() {
  const {moviesArray, popularMoviesFunction, searchMovie} = useMovieContext()


//Executes the function with the API call on movie context
      useEffect(()=>{
        popularMoviesFunction()
      }, [])


  return (
    <>
    <Container className="d-flex flex-row flex-wrap mt-2 container-md justify-content-around">

    {moviesArray && moviesArray.map((movie, i)=>{
        return <EachCard key={i} poster={movie.image} title={movie.title} date={movie.date} description={movie.description} />
    })}
    {(moviesArray.length == 0) && <p className="text-white">Sorry! We couldn't find any movies named "{searchMovie}"</p>}

    </Container>
    </>
  )
}

export default MovieCards