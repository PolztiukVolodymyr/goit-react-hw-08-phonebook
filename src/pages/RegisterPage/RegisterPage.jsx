import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from "../../redux/auth/authOperations";
import css from "../Page.module.css"


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
            
        <form onSubmit={handleSubmit} className={css.form}>
           <h2>Sign up</h2>
            <label className={css.label}>
               
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
                  Sign up
               </button>
            </div>
            <NavLink className={css.pageLink} to="/login">To login form.</NavLink>
         </form>
       );
};