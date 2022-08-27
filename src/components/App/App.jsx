import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIsRefreshing } from '../redux/auth/authSelectors';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { useEffect, Suspense, lazy } from 'react';
import Loader from '../../components/Loader/Loader';

const AppBar = lazy(() => import('components/AppBar/AppBar'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const PhoneBook = lazy(() => import('../PhoneBook/PhoneBook'));
const Login = lazy(() => import('../../pages/LoginPage/LoginPage'));
const Register = lazy(() => import('../../pages/RegisterPage/RegisterPage'));

export const App = () => {

   const dispatch = useDispatch();
  //  const isRefreshing = useSelector(getIsRefreshing);

   useEffect(() => {
      dispatch(fetchCurrentUser());
   }, [dispatch]);
  
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<PhoneBook />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
