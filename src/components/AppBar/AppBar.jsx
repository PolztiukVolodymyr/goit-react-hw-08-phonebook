// import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import { Outlet } from 'react-router';

import { getIsLoggedIn } from "../redux/auth/authSelectors"
import { useSelector } from 'react-redux';


export const AppBar = () => {
	const isLogedIn = useSelector(getIsLoggedIn);
	console.log("isLogedIn:", isLogedIn);
	return (
		<div>
			<header>
				<Navigation />
				{isLogedIn ? <UserMenu /> : <AuthNav />}
			</header>
		   <Outlet />
		</div>
	);
};

export default AppBar;

