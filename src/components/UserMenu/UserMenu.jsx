import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { getUserName } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import userAvatar from '../../images/user-logo.png';
import css from './UserMenu.module.css';


export default function UserMenu() {
   const name = useSelector(getUserName);
   const dispatch = useDispatch();
   
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
               onClick={() => dispatch(logOut())}
                >
               logOut
            </button>
         </div>
      </div>
   );
}