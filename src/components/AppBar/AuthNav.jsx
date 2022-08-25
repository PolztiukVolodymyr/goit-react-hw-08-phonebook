import { NavLink } from 'react-router-dom';



export const AuthNav = () => {
	return (
		<nav>
			<NavLink to="/register">Реєстрація</NavLink>
			<NavLink to="/login">Залогінитися</NavLink>
		</nav>
	);
};

export default AuthNav;