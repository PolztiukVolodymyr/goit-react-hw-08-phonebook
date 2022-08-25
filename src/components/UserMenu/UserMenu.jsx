import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getEmail } from '../redux/auth/authSelectors';
import { logOut } from '../redux/auth/authOperations';
import userAvatar from '../../images/user-logo.png';
import css from './UserMenu.module.css';


export default function UserMenu() {
   const email = useSelector(getEmail);
   const dispatch = useDispatch();

   return (
      <div className={css.container}>
         <img
            className={css.avatar}
            src={userAvatar}
            alt="avatar"
            width="40"
         />
         <span className={css.text}>Welcome {email}</span>
         <div>
               <button
               className={css.btn}
               type="button"
               onClick={() => dispatch(logOut())}
            >
               logOut
            </button>
         </div>
      </div>
   );
}