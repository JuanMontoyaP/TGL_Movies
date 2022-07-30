import React from 'react';
import { Container } from 'react-bootstrap';
// import {Link} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from '../routes/AllRoutes';
import { UserContextProvider } from '../context/UserContext';
import { MovieContextProvider } from '../context/MoviesContext';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function index() {
	return (
		<Container
			fluid
			style={{
				background:
					'linear-gradient(90deg, rgba(19,35,50,1) 0%, rgba(25,41,57,1) 35%, rgba(35,53,70,1) 100%)',
				height: '100%',
			}}>
			<UserContextProvider>
				<MovieContextProvider>
					<NavBar />
					<Banner />
					<Router>
						<AllRoutes />
					</Router>
					<Footer />
				</MovieContextProvider>
			</UserContextProvider>
		</Container>
	);
}

export default index;
