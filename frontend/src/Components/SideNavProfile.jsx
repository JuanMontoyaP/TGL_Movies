import React from 'react';
import {
	Container,
	ListGroup,
	Tab,
    Nav
} from 'react-bootstrap';
import LogOut from './LogOut';

const sideNavData = [
	{
		title: 'My Profile',
		icon: '',
		component: 'MyProfile',
	},
	{
		title: 'Update Profile',
		icon: '',
		component: 'UserProfileUpdate',
	},
	{
		title: 'My Saved Movies',
		icon: '',
		component: 'SavedMovies',
	},
];

function SideNavProfile(props) {
	return (
		// <Container className="text-white" style={{border: '1px solid red', width: '20vw'}}>
			<ListGroup className="pt-1">
				{sideNavData.map((val, i) => {
					return (
						<ListGroup.Item
							action
							variant='secondary'
							key={i}
							value={val.title}
							onClick={() => {
								props.handleSideNavTabs(
									val.component
								);
							}}>
							{val.title}
						</ListGroup.Item>
					);
				})}
				<LogOut />
			</ListGroup>

		//{/* </Container> */}
	);
}

export default SideNavProfile;
