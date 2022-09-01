import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact } from "../../redux/contacts/contactOperations";
import { getContacts, getIsRefreshing } from "../../redux/contacts/contactsSelectors";

import css from './ContactForm.module.css';


export default function ContactForm() {

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isChanging = useSelector(getIsRefreshing);


  const handleChange = evt => {
    if (evt.target.name === "name") {
      setName(evt.target.value);
    };
    if (evt.target.name === "number") {
      setNumber(evt.target.value);
    };
  };
    
 const  handleSubmit = evt => {
   evt.preventDefault();
   
   if (contacts.find(contact =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())
      ) {
       reset();
       return toast.warning(`${name} is alredy in contacts`);
       
   };
   
   if (name && number) {
     dispatch(addContact({ name: name, number: number }));
      // toast.success(`Contact created`);
       reset();
   };
       
  };

  const reset = () => {
    setName("");
    setNumber("");
  };
      
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>Name
        <input
          className={css.inputName}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder={"Enter name"}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces.
         For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.label}>Number
        <input
          className={css.inputNumber}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder={"Enter number"}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes,
         parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btnContact} type="submit" disabled={isChanging}>Add contact</button>
      <ToastContainer theme="colored" autoClose={2000}/>
    </form>
  );
};


ContactForm.propTypes = {
  onSubmit: PropTypes.func,
}