import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import EachCard from './EachCard'
function MovieCards() {


    const arrayDePeliculas = [
        {poster: URL,
        titulo: "string",
        año: "Number",
        description: "string mas largo"},
        {poster: URL,
          titulo: "string",
          año: "Number",
          description: "string mas largo"},
        {poster: URL,
            titulo: "string",
            año: "Number",
            description: "string mas largo"},
            {poster: URL,
                titulo: "string",
                año: "Number",
                description: "string mas largo"},
                {poster: URL,
                    titulo: "string",
                    año: "Number",
                    description: "string mas largo"},
                    {poster: URL,
                        titulo: "string",
                        año: "Number",
                        description: "string mas largo"},
      ]


  return (
    <>
    <Container className="d-flex flex-row flex-wrap mt-2 container-md justify-content-around">

    {arrayDePeliculas.map((movie)=>{
        return <EachCard poster={movie.poster} titulo={movie.titulo} año={movie.año} description={movie.description} />
    })}

    </Container>
    </>
  )
}

export default MovieCards