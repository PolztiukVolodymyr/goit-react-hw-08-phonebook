import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  isLoggedIn,
  redirectPath = '/',
  children,
}) {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}


// import { useSelector } from 'react-redux';
// import {  Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from '../redux/auth/authSelectors';

// export default function PrivateRoute({ children }) {
//    const isLoggedIn = useSelector(getIsLoggedIn);
//    return (
//       <div>
//          {isLoggedIn ? (
//             <div>{children}</div>
//          ) : (
//             <Navigate to="login" />
//          )}
//       </div>
//    );
// }