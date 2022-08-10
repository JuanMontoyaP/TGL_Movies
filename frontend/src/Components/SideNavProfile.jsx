import React from 'react';
import {
	Container,
	ListGroup,
	Tab,
    Nav
} from 'react-bootstrap';
// import LogOut from './LogOut';

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

<Nav fill variant="tabs" defaultActiveKey="/home">
<Nav.Item>
  <Nav.Link href="/home">Active</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="link-2">Link</Nav.Link>
</Nav.Item>
<Nav.Item>
  <Nav.Link eventKey="disabled" disabled>
	Disabled
  </Nav.Link>
</Nav.Item>
</Nav>

function SideNavProfile(props) {
	return (
		// <Container className="text-white" style={{border: '1px solid red', width: '20vw'}}>
			<Nav justify 
			variant='tabs' 
			className="pt-1 mb-3" >
				{sideNavData.map((val, i) => {
					return (
						<Nav.Item>
						<Nav.Link
						style={{color: 'white'}}
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
						</Nav.Link>
						</Nav.Item>
					);
				})}
				{/* <LogOut /> */}
			</Nav>

		//{/* </Container> */}
	);
}

export default SideNavProfile;
