
import css from './App.module.css';
import SearchBox from '../SearchBox/SearchBox'
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const userData = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("savedContacts");
    if (!savedContacts) return userData;
    return JSON.parse(savedContacts);
  });

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = (value) => {
    setInputValue(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(inputValue.toLowerCase().trim()));
  };

  const deleteContact = (deletedId) => {
    setContacts((prev) => prev.filter(({ id }) => id !== deletedId));
  };

  const addContact = (contactData) => {
    const finalContact = {
      ...contactData,
      id: nanoid(),
    };
    setContacts((prev) => [...prev, finalContact]);
  };

  return (
    <div className={css.pageStyle}>
      <h1 className={css.formTitle}>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox handleChange={handleChange} inputValue={inputValue} />
      <ContactList
        userData={userData}
        inputValue={inputValue}
        contacts={getVisibleContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default App;