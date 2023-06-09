import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from 'redux/taskSlice';
import { nanoid } from '@reduxjs/toolkit';
import styles from './ContactForm.module.css';
import stylesApp from '../../components/App.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;
    const id = nanoid();
    dispatch(addTask({ id, name, number }));
    e.target.elements.name.value = '';
    e.target.elements.number.value = '';
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name" className={stylesApp.label_input}>
        Name
        <input
          className={stylesApp.field}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number" className={stylesApp.label_input}>
        Number
        <input
          className={stylesApp.field}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={stylesApp.btn}>
        Add
      </button>
    </form>
  );
};

export default ContactForm;
