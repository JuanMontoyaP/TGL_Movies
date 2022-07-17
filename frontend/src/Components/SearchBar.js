import React, { useRef } from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap'
import {FaSearchengin} from 'react-icons/fa'

function SearchBar() {
    const searchInput = useRef()

    function handleInput() {
        console.log(searchInput.current.value)
    }
  return (
                <InputGroup size="lg" className="fluid mb-3" >
        <Form.Control
          placeholder="Search for your favorite movie!"
          ref={searchInput}
          onChange={handleInput}
          style={{fontSize: '1.8em'}}
        />
        <Button variant="secondary">
          <FaSearchengin size={50}/>
        </Button>
      </InputGroup>
  )
}

export default SearchBar