import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function EachCard(props) {
	const [mouseOver, setMouseOver] =
		useState(false);

	function handleMouseOver() {
		setMouseOver(true);
	}
	function handleMouseOut() {
		setMouseOver(false);
	}

	return (
		<>
			<Card
				bg={'secondary'}
        text={'light'}
				className='m-2 p-2 text-wrap'
				style={{
					width: '15rem', overflow: 'hidden'
				}}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}>
				<Card.Img
					style={
						!mouseOver ? {} : { opacity: '0.3' }
					}
					src={props.poster}
				/>
				{mouseOver && (
					<Card.ImgOverlay>
						<Card.Header>
              <Card.Title>
							{props.title}
              </Card.Title>
						</Card.Header>
						<Card.Text>
							{props.description}
						</Card.Text>
					</Card.ImgOverlay>
				)}
			</Card>
		</>
	);
}

export default EachCard;
