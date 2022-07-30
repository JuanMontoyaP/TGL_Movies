import React from 'react';
import {
	Container,
	Row,
	Col,
} from 'react-bootstrap';

function EachMovieSaved(props) {
	return (
		<Container fluid className='text-white'>
			<hr />
			<Row>
				<Col sm={3}>
					<img
						src={props.img}
						style={{ maxHeight: '250px' }}
					/>
				</Col>
				<Col sm={3}>
					<h3>{props.title}</h3>
				</Col>
				<Col sm={1}>
					<p>{props.avgRating}</p>
				</Col>
				<Col sm={1}>
					<p>{props.myRating}</p>
				</Col>
				<Col sm={3}>
					<p>{props.myReview}</p>
				</Col>
				<Col sm={1}>
					<button>Remove</button>
				</Col>
			</Row>
		</Container>
	);
}

export default EachMovieSaved;
