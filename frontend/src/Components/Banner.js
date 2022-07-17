import React, { useRef } from 'react'
import tpg_logo from '../assets/tpg_logo-1-svg.svg'
import tgl_logo from '../assets/TGLAB_logo.svg'
import SearchBar from './SearchBar'

function Banner() {
    const searchInput = useRef()

    function handleInput() {
        console.log(searchInput.current.value)
    }
  return (

    <div
    className='p-5 text-center bg-image'
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
        <div className='d-flex p-4 justify-content-center align-items-center h-80'>
            <div className='text-white'>
                <img src={tgl_logo}/>
                <h1 className='mb-3'>
                    Movie Search Engine
                </h1>
             <SearchBar/>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner