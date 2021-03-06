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
			<Row>
				<Col sm={2}>
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
			</Row>
		</Container>
	);
}

export default Profile;
