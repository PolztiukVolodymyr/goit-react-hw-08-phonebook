import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from "../../components/redux/auth/authOperations";
import css from "./LoginPage.module.css";


export default function LoginPage() {

   const dispatch = useDispatch();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

       const handleChange = evt => {
            
     if (evt.target.name === "email") {
            setEmail(evt.target.value);
          };
          
      if (evt.target.name === "password") {
            setPassword(evt.target.value);
        };
   };

      const reset = () => {
       setEmail("");
       setPassword("");
   };

      const handleSubmit = async evt => {
      evt.preventDefault();
      dispatch(logIn({ email, password }));
      reset();
   };


  return (
          <div>
         <h1>Login page</h1>
         <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
               Email
               <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Email"
                  required
               />
            </label>
            <label className={css.label}>
               Password
               <input
                 onChange={handleChange}
                  type="password"
                  name="password"
                  value={password}
                  placeholder="password"
                  minLength={5}
                  required
               />
            </label>
            <div >
          <button type="submit" >
            Login
                  {/* {isLoading ? 'Login...' : 'Login'} */}
               </button>
            </div>
            <NavLink to="/register">To register form.</NavLink>
         </form>
      </div>
  );
};