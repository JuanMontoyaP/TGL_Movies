import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../Components/Banner'
import MovieCards from '../Components/MovieCards'
import {useUserContext} from '../context/UserContext'

function Home() {
  const {homePage, setHomePage} = useUserContext()

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