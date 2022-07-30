import React from 'react';
import {
	Container,
	ListGroup,
	Tab,
} from 'react-bootstrap';
import LogOut from './LogOut';
const sideNavData = [
	{
		title: 'My Account',
		icon: '',
		component: '',
	},
	{
		title: 'Update Profile',
		icon: '',
		component: 'UserProfileUpdate',
	},
	{
		title: 'My Saved Movies',
		icon: '',
		component: '',
	},
];

function SideNavProfile(props) {
	return (
		// <Container className="text-white" style={{border: '1px solid red', width: '20vw'}}>
		<Tab.Container>
			<ListGroup>
				{sideNavData.map((val, i) => {
					return (
						<ListGroup.Item
							action
							variant='dark'
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
		</Tab.Container>
		//{/* </Container> */}
	);
}

export default SideNavProfile;
