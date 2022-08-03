import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import MovieCards from '../Components/MovieCards'
import FilterByGenre from '../Components/FilterByGenre'
// import {useUserContext} from '../context/UserContext'
//Children of AllRoutes
function Home() {
  // const {homePage, setHomePage} = useUserContext()
//hopefully shows searchbar only on this view
  // useEffect(()=>{
  //   setHomePage(true)
  //   console.log("home en effect", homePage)
  // }, [])

  return (
    <Container className="text-white text-center">
    <hr />
    <p>Coming soon...</p><FilterByGenre/>
    <hr/>
    <h1>Popular Movies</h1>
    <MovieCards/>

  </Container>
  )
}

export default Home
