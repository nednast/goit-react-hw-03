import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ visbleContacts }) => {
  return (
    <>
      <ul className={css.list}>
        {visbleContacts.map((contact) => (
          <li className={css.wrapper} key={contact.id}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
