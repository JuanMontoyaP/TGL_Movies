import React, { useState } from 'react';
import SavedMovies from '../Components/SavedMovies';
import {
	Container,
	Col,
	Row,
} from 'react-bootstrap';
import SideNavProfile from '../Components/SideNavProfile';
import UserProfileUpdate from '../Views/UserProfileUpdate';

function Profile() {
	const [showComponent, setShowComponent] =
		useState();

	function handleSideNavTabs(component) {
		setShowComponent(component);
	}

	return (
		<Container>
			<Row>
				<Col sm={2}>
					<SideNavProfile
						handleSideNavTabs={handleSideNavTabs}
					/>
				</Col>
				<Col sm={10}>
					<UserProfileUpdate />
				</Col>
			</Row>
		</Container>
	);
}

export default Profile;
