import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./ContactList.module.css";
import { editContact, deleteContact } from '../redux/contacts/contactOperations';
import { getContacts } from '../redux/contacts/contactsSelectors';


const ContactItem = ({  id, name, number }) => {
  
   const [changeName, setChangeName] = useState(name);
   const [changeNumber, setChangeNumber] = useState(number);
   const [changeContact, setChangeContact] = useState(false);
   const contacts = useSelector(getContacts);
   const dispatch = useDispatch();
  
     const handelChengeContact = () => {
      if (changeContact) {
         if (name === changeName && number === changeNumber) {
            setChangeContact(!changeContact);
            return;
         }
         if (
            contacts.find(contact =>
                  contact.name.toLocaleLowerCase() ===
                     changeName.toLocaleLowerCase() && contact.id !== id
            )
         ) {
            toast.warning(`${changeName} is alredy in contacts`);
            return;
         }
         dispatch(editContact({
               id,
               name: changeName,
               number: changeNumber,
            })
         );
      }
      setChangeContact(!changeContact);
  };
  
     return (
      <li className={css.item} id={id}>
         {changeContact ? (
            <>
               <input
                  className={css.input}
                  type="name"
                  name="name"
                  value={changeName}
                  placeholder="Name Lastname"
                  required
                  onChange={evt => setChangeName(evt.target.value)}
               />
               <input
                  className={css.input}
                  type="tel"
                  name="number"
                  value={changeNumber}
                  placeholder="XXX-XX-XX"
                  required
                  onChange={evt => setChangeNumber(evt.target.value)}
               />
            </>
         ) : (
            <div className={css.valueWrap}>
               <span className={css.name}>{name}: </span>
               <span>{number}</span>
            </div>
         )}
         <div className={css.blockButtons}>
            
               <button className={css.btnContacts} type="button" onClick={handelChengeContact}>
                  {changeContact ? 'Save' : 'Edit'}
               </button>
            
            
              <button
                  className={css.btnDelete}
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
               >
                  Delete
               </button>
            
         </div>
      </li>
   );
  
};

export default ContactItem;

ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
};