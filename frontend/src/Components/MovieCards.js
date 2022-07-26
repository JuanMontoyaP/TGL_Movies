import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Container} from 'react-bootstrap'
import EachCard from './EachCard'
function MovieCards() {
const [moviesArray, setMoviesArray] = useState([])

    // const arrayDePeliculas = [
    //     {poster: URL,
    //     titulo: "string",
    //     año: "Number",
    //     description: "string mas largo"},
    //     {poster: URL,
    //       titulo: "string",
    //       año: "Number",
    //       description: "string mas largo"},
    //     {poster: URL,
    //         titulo: "string",
    //         año: "Number",
    //         description: "string mas largo"},
    //         {poster: URL,
    //             titulo: "string",
    //             año: "Number",
    //             description: "string mas largo"},
    //             {poster: URL,
    //                 titulo: "string",
    //                 año: "Number",
    //                 description: "string mas largo"},
    //                 {poster: URL,
    //                     titulo: "string",
    //                     año: "Number",
    //                     description: "string mas largo"},
    //   ]

      useEffect(()=>{
        axios.get("http://localhost:8080/movies/popular")
        .then(response=>{
          console.log("response", response)
          setMoviesArray(response.data.data)
        })
      }, [])

  return (
    <>
    <Container className="d-flex flex-row flex-wrap mt-2 container-md justify-content-around">

    {moviesArray.map((movie, i)=>{
        return <EachCard key={i} poster={movie.image} title={movie.title} date={movie.date} description={movie.description} />
    })}

    </Container>
    </>
  )
}

export default MovieCards