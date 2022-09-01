import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { getIsLoggedIn } from "../../redux/auth/authSelectors";
import css from "./AppBar.module.css"


export const Navigation = () => {
	const location = useLocation();
  const isHomePath = location.pathname === '/';
	const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <nav>
			<NavLink to="/" className={css.titleLinc}>Phonebook</NavLink>
			{ isLoggedIn && isHomePath && <NavLink className={css.homeLinc} to="/contacts">Back to ContactBook</NavLink>}
		</nav>
			
	);
};

export default Navigation;