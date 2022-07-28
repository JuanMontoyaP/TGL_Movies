import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import MovieCards from '../Components/MovieCards'
import {useUserContext} from '../context/UserContext'

//Children of AllRoutes
function Home() {
  const {homePage, setHomePage} = useUserContext()
//hopefully shows searchbar only on this view
  useEffect(()=>{
    setHomePage(true)
    console.log("home en effect", homePage)
    return ()=>setHomePage(false)
  }, [])

  return (
  <Container>

    <MovieCards/>


  </Container>
  )
}

export default Home