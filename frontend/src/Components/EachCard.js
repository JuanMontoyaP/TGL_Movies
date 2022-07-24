import React, {useState} from 'react'
import {Card} from 'react-bootstrap'

function EachCard(props) {
    const [mouseOver, setMouseOver] = useState(false)


    function handleMouseOver() {
        setMouseOver(true)
        console.log("mouseOver", mouseOver)
    }
    function handleMouseOut() {
        setMouseOver(false)
        console.log("mouseOut", mouseOver)
    }
const backOfCard = `<Card.body>
<Card.title>Title: 
  {props.title}
  </Card.title>
<Card.text>
Year: 
{props.date}
Description:  {props.description}
</Card.text>
</Card.body>`

  return (
    <>
    <Card 
    className='m-2 p-2' 
    style={{ maxWidth: '250', width: '150px'}}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    > 
    {!mouseOver ? 
    <Card.Img src={props.poster}/>
    : 
    backOfCard
}
    </Card>
    </>
  )
}

export default EachCard