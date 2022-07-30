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


  return (
    <>
    <Card 
    className='m-2 p-2 img-responsive img-thumbnail m-2' 
    style={{ maxWidth: '200'}}
    onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut}
    > 
    {!mouseOver ? 
    <Card.Img src="https://ww3.cuevana.pro/resize/200/storage/33380/92D77KV0QPr10oVaKV3ncZuNCOYYXJYzhALfmIW2.jpg"/>
    : 
    <Card.Img src="	https://ww3.cuevana.pro/resize/200/storage/39175/dblmzk8OhtD5xHJy9HD82Vkj5KnKA50SMtJAxApl.jpg"/>

}
    </Card>
    </>
  )
}

export default EachCard