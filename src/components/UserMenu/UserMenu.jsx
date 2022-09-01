import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import userAvatar from '../../images/user-logo.png';
import css from './UserMenu.module.css';


export default function UserMenu() {
   const name = useSelector(getUserName);
   const dispatch = useDispatch();

   const handleLogOut = () => {
      console.log("User menu: handleLogOut")
      toast.success("LogOut!");
         dispatch(logOut());
   };
   
   
   return (
      <div className={css.container}>
         <img
            className={css.avatar}
            src={userAvatar}
            alt="avatar"
            width="40"
         />
         <span className={css.text}>Welcome {name}</span>
         <div>
               <button
               className={css.userBtn}
               type="button"
               // onClick={() => dispatch(logOut())}
               onClick={handleLogOut}
            >
               logOut
            </button>
         </div>
      </div>
   );
}