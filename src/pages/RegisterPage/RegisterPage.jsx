import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from "../../components/redux/auth/authOperations";
import css from "./RegisterPage.module.css";


export default function RegisterPage() {
   const dispatch = useDispatch();
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

    const handleChange = evt => {
     
     if (evt.target.name === "name") {
         setName(evt.target.value);
        };
     
     if (evt.target.name === "email") {
            setEmail(evt.target.value);
          };
          
      if (evt.target.name === "password") {
            setPassword(evt.target.value);
        };
   };
   
    const reset = () => {
       setName("");
       setEmail("");
       setPassword("");
   };
   
   const handleSubmit = async evt => {
      evt.preventDefault();
      dispatch(register({ name, email, password }));
      reset();
   };


  return (
    <div>
         <h1>Register page</h1>
         <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
               Name
               <input
                  onChange={handleChange}
                  type="name"
                  name="name"
                  value={name}
                  placeholder="Name"
                  required
               />
            </label>
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
                  Sign up
               </button>
            </div>
            <NavLink to="/login">To login form.</NavLink>
         </form>
      </div>
  );
};