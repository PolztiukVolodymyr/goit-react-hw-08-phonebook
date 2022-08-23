import { Routes, Route } from 'react-router-dom';

import AppBar from 'components/AppBar/AppBar';
import HomePage from '../../pages/HomePage/HomePage';
import PhoneBook from '../PhoneBook/PhoneBook';
import Login from '../../pages/LoginPage/LoginPage';
import Register from '../../pages/RegisterPage/RegisterPage';

// import { lazy } from 'react';
// const AppBar = lazy(() => import('components/AppBar'));
// const Home = lazy(() => import('pages/Home'));
// const Contacts = lazy(() => import('pages/Contacts'));
// const Login = lazy(() => import('pages/Login'));
// const Register = lazy(() => import('pages/Register'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
      </Routes>
    </>
  );
};
