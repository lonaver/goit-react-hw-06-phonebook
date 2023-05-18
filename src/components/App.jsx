import React from 'react';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

import styles from './App.module.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
  const contacts = useSelector(getTasks);

  return (
    <div className={styles.contacts}>
      <h1>Phone book</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter></Filter>
      {contacts.length > 0 && <ContactList></ContactList>}
    </div>
  );
};

export default App;
