import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsLoggedIn } from "../redux/auth/authSelectors";


export const Navigation = () => {
	const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <nav>
			<NavLink to="/">Головна сторінка</NavLink>
			{ isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
		</nav>
			
	);
};

export default Navigation;