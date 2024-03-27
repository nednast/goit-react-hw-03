import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visbleContacts, onDelete }) => {
  return (
    <>
      <ul className={css.list}>
        {visbleContacts.map((contact) => (
          <li className={css.wrapper} key={contact.id}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
