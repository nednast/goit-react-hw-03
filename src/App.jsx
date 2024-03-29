import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialValues from "./components/Contact/initialValues.json";
import { nanoid } from "nanoid";
const App = () => {
  const [contacts, setContacts] = useState(() => {
    if (localStorage.getItem("contacts")) {
      return JSON.parse(localStorage.getItem("contacts"));
    } else {
      return initialValues;
    }
  });
  const [filter, setFilter] = useState("");

  const addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };
    setContacts((contacts) => {
      return [...contacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList visbleContacts={visibleContacts} onDelete={deleteContact} />
    </>
  );
};
export default App;
