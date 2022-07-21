import React, { useRef } from 'react'
import tgl_logo from '../assets/TGLAB_logo.svg'
import SearchBar from './SearchBar'

function Banner() {
    const searchInput = useRef()

    function handleInput() {
        console.log(searchInput.current.value)
    }
  return (

    <div
    className='p-5 text-center bg-image mt-5'
    style={{
        backgroundImage:
            "url('https://edu.teaminternational.com/wp-content/uploads/2020/10/tpl_hero.jpg')",
        height: 400,
    }}>
    <div
        className='mask'
        style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}>
        <div className='d-flex p-4 justify-content-center flex-column align-items-center'
         >
                <img className="img-fluid min-width" src={tgl_logo}/>
                <h1 className='mb-3 text-white'>
                    Movie Search Engine
                </h1>
             <SearchBar/>
        </div>
    </div>
</div>
  )
}

export default Banner