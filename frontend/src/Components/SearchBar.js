import React, { useRef } from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap'
import {FaSearchengin} from 'react-icons/fa'

//Children of Banner
function SearchBar() {
    const searchInput = useRef()

    function handleInput() {
    }

  return (
    // <>

                <InputGroup size="lg" className="mb-3" >
        <Form.Control
          placeholder="Search for your favorite movie!"
          ref={searchInput}
          onChange={handleInput}
          style={{fontSize: '1.8rem'}}
        />
        <Button variant="secondary">
          <FaSearchengin size={50}/>
        </Button>
      </InputGroup>
      //{/* </> */}
  )
}

export default SearchBar