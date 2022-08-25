// import { useState } from 'react';
// import ContactForm from '../../components/ContactForm/ContactForm';
// import Filter from '../../components/Filter/Filter';
// import ContactList from '../../components/ContactList/ContactList';
import UserMenu from '../../components/UserMenu/UserMenu';

export default function HomePage() {
  //  const [filter, setFilter] = useState('');

   return (
     <>
       <div>Home Page</div>
         <UserMenu />
         <h1>Phonebook</h1>
         {/* <ContactForm /> */}
         <h2>Contacts</h2>
         {/* <Filter filter={filter} onChange={setFilter} /> */}
         {/* <ContactList filter={filter} /> */}
      </>
     
   );
}