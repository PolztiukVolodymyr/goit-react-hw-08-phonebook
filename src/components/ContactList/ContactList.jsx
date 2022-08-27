import  ContactItem  from "./ContactItem";
import css from "./ContactList.module.css";

const ContactList = ({contacts}) => {

  return (
    <ul className={css.list}>
      {contacts && contacts.map(({ id, name, number })=> (
         <ContactItem
            key={id}
            id={id}
            data={contacts}
            name={name}
            number={number}
          />
      ))}
     </ul>
  );
};

export default ContactList;