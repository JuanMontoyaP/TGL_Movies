import React from 'react'
import { Container } from 'react-bootstrap'
import Banner from '../Components/Banner'
import MovieCards from '../Components/MovieCards'

function Home() {
  return (
  <Container style={{
    background: 'linear-gradient(90deg, rgba(19,35,50,1) 0%, rgba(25,41,57,1) 35%, rgba(35,53,70,1) 100%)'}}>

<div>
    Header
</div>

    <Banner/>
    <MovieCards/>
<div>
    Footer
</div>

  </Container>
  )
}

export default Home