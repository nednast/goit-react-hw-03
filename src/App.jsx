import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import initialValues from "./components/ContactList/Contact/initialValues.json";

const App = () => {
  const [contacts, setContacts] = useState(initialValues);
  const [filter, setFilter] = useState("");

  const searchBoxOnChange = (e) => {
    setFilter((prevValue) => e.target.value);

    const visibleContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox value={filter} onFilter={searchBoxOnChange} />
        <ContactList visbleContacts={visibleContacts} />
      </>
    );
  };
};
export default App;
