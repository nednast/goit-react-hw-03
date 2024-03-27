import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialValues from "./components/Contact/initialValues.json";
import { nanoid } from "nanoid";

const App = () => {
  const [contacts, setContacts] = useState(initialValues);
  const [filter, setFilter] = useState("");

  const addContact = (contact) => {
    const newContact = {
      id: nanoid(),
      name: contact.contactName,
      number: contact.contactNumber,
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
