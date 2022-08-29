// import { NavLink } from 'react-router-dom';
import AuthNav from './AuthNav';
import Navigation from './Navigation';
import UserMenu from '../../components/UserMenu/UserMenu';
import { Outlet } from 'react-router';

import { getIsLoggedIn } from "../redux/auth/authSelectors"
import { useSelector } from 'react-redux';
import css from "./AppBar.module.css"


export const AppBar = () => {
	const isLogedIn = useSelector(getIsLoggedIn);
	return (
		<div>
			<header className={css.header}>
				<Navigation />
				{isLogedIn ? <UserMenu /> : <AuthNav />}
			</header>
		   <Outlet />
		</div>
	);
};

export default AppBar;

