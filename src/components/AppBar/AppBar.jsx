import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';
import { Suspense } from 'react';
import  Loader  from '../../components/Loader/Loader';


export const AppBar = () => {
	return (
		<div>
			<nav>
				<NavLink to="/">Головна сторінка</NavLink>
				<NavLink to="/contacts">Контакти</NavLink>
				<NavLink to="/register">Реєстрація</NavLink>
				<NavLink to="/login">Залогінитися</NavLink>
			</nav>
			<div>
				<Suspense fallback={<Loader />}>
					<Outlet />
				</Suspense>
			</div>
		</div>
	);
};

export default AppBar;