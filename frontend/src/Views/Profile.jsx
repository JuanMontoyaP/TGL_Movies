import React, { useState, useEffect } from 'react';
import SavedMovies from '../Components/SavedMovies';
import {
	Container,
	Col,
	Row,
} from 'react-bootstrap';
import SideNavProfile from '../Components/SideNavProfile';
import UserProfileUpdate from '../Views/UserProfileUpdate';
import MyProfile from '../Components/MyProfile';
import Logout from '../Components/LogOut'
import { useMovieContext } from '../context/MoviesContext';


function Profile() {
	const [showComponent, setShowComponent] =
		useState('');
	
	const { loadFavorites, favMoviesArray  } = useMovieContext();

	function handleSideNavTabs(component) {
		setShowComponent(component);
	}
	useEffect(() => {
		loadFavorites()
	}, [])
	
	return (
		<Container>
			<Row className='d-flex justify-content-center'>
				<Col sm={6}>
					<SideNavProfile
						handleSideNavTabs={handleSideNavTabs}
					/>
				</Col>
				<Col sm={10}>
        {(showComponent == '') && 
							(<MyProfile />)
						}
					{(showComponent == 'MyProfile') && 
							(<MyProfile />)
						}
					{showComponent ==
						'UserProfileUpdate' && (
						<UserProfileUpdate />
					)}
					{showComponent == 'SavedMovies' && (
						<SavedMovies />
					)}
				</Col>
			<Logout/>
			</Row>
		</Container>
	);
}

export default Profile;
