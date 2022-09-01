import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from "../../redux/auth/authOperations";
import css from "../Page.module.css"


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
                  
        <form onSubmit={handleSubmit} className={css.form}>
           <h2>Login page</h2>
            <label className={css.label}>
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
          <button className={css.pageBtn} type="submit" >
            Login
                  {/* {isLoading ? 'Login...' : 'Login'} */}
               </button>
            </div>
            <NavLink className={css.pageLink} to="/register">To register form.</NavLink>
         </form>
     );
};